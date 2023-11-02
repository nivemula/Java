/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NodePath } from "@babel/core";
import * as t from "@babel/types";
import {
  CompilerError,
  CompilerErrorDetail,
  CompilerSuggestionOperation,
  ErrorSeverity,
} from "../CompilerError";
import { CodegenFunction } from "../ReactiveScopes";
import { isComponentDeclaration } from "../Utils/ComponentDeclaration";
import { assertExhaustive } from "../Utils/utils";
import { insertGatedFunctionDeclaration } from "./Gating";
import { addImportsToProgram, updateUseMemoCacheImport } from "./Imports";
import { addInstrumentForget } from "./Instrumentation";
import { ExternalFunction, PluginOptions, parsePluginOptions } from "./Options";
import { compileFn } from "./Pipeline";

export type CompilerPass = {
  opts: PluginOptions;
  filename: string | null;
  comments: (t.CommentBlock | t.CommentLine)[];
};

function hasAnyUseForgetDirectives(directives: t.Directive[]): boolean {
  for (const directive of directives) {
    if (directive.value.value === "use forget") {
      return true;
    }
  }
  return false;
}

function hasAnyUseNoForgetDirectives(directives: t.Directive[]): boolean {
  for (const directive of directives) {
    if (directive.value.value === "use no forget") {
      return true;
    }
  }
  return false;
}

function isCriticalError(err: unknown): boolean {
  return !(err instanceof CompilerError) || err.isCritical();
}

function handleError(
  pass: CompilerPass,
  fnLoc: t.SourceLocation | null,
  err: unknown
): void {
  if (pass.opts.logger) {
    if (err instanceof CompilerError) {
      for (const detail of err.details) {
        pass.opts.logger.logEvent(pass.filename, {
          kind: "CompileError",
          fnLoc,
          detail: detail.options,
        });
      }
    } else {
      let stringifiedError;
      if (err instanceof Error) {
        stringifiedError = err.stack ?? err.message;
      } else {
        stringifiedError = err?.toString() ?? "[ null ]";
      }

      pass.opts.logger.logEvent(pass.filename, {
        kind: "PipelineError",
        fnLoc,
        data: stringifiedError,
      });
    }
  }
  /** Always throw if the flag is enabled, otherwise we only throw if the error is critical
   * (eg an invariant is broken, meaning the compiler may be buggy). See
   * {@link CompilerError.isCritical} for mappings.
   * */
  if (
    pass.opts.panicThreshold === "ALL_ERRORS" ||
    (pass.opts.panicThreshold === "CRITICAL_ERRORS" && isCriticalError(err))
  ) {
    throw err;
  }
}

/**
 * Mutates the source AST to include a newly Forget-compiled function.
 */
function insertNewFunctionDeclaration(
  originalFn: NodePath<
    t.FunctionDeclaration | t.ArrowFunctionExpression | t.FunctionExpression
  >,
  compiledFn: CodegenFunction,
  pass: CompilerPass
): void {
  let transformedFn:
    | t.FunctionDeclaration
    | t.ArrowFunctionExpression
    | t.FunctionExpression;
  switch (originalFn.node.type) {
    case "FunctionDeclaration": {
      const fn: t.FunctionDeclaration = {
        type: "FunctionDeclaration",
        id: compiledFn.id,
        loc: originalFn.node.loc ?? null,
        async: compiledFn.async,
        generator: compiledFn.generator,
        params: compiledFn.params,
        body: compiledFn.body,
      };
      transformedFn = fn;
      break;
    }
    case "ArrowFunctionExpression": {
      const fn: t.ArrowFunctionExpression = {
        type: "ArrowFunctionExpression",
        loc: originalFn.node.loc ?? null,
        async: compiledFn.async,
        generator: compiledFn.generator,
        params: compiledFn.params,
        expression: originalFn.node.expression,
        body: compiledFn.body,
      };
      transformedFn = fn;
      break;
    }
    case "FunctionExpression": {
      const fn: t.FunctionExpression = {
        type: "FunctionExpression",
        id: compiledFn.id,
        loc: originalFn.node.loc ?? null,
        async: compiledFn.async,
        generator: compiledFn.generator,
        params: compiledFn.params,
        body: compiledFn.body,
      };
      transformedFn = fn;
      break;
    }
  }

  // Avoid visiting the new transformed version
  ALREADY_COMPILED.add(transformedFn);

  if (pass.opts.instrumentForget != null) {
    const instrumentFnName = pass.opts.instrumentForget.importSpecifierName;
    addInstrumentForget(transformedFn, instrumentFnName);
  }
  if (pass.opts)
    if (pass.opts.gating != null) {
      if (pass.opts.instrumentForget != null) {
        const instrumentFnName = pass.opts.instrumentForget.importSpecifierName;
        addInstrumentForget(originalFn.node, instrumentFnName);
      }
      insertGatedFunctionDeclaration(
        originalFn,
        transformedFn,
        pass.opts.gating
      );
    } else {
      originalFn.replaceWith(transformedFn);
    }
}

function findEslintSuppressions(
  fileComments: Array<t.CommentBlock | t.CommentLine>
): CompilerError | null {
  const violations = [];

  if (Array.isArray(fileComments)) {
    for (const comment of fileComments) {
      if (
        /eslint-disable(-next-line)? react-hooks\/(exhaustive-deps|rules-of-hooks)/.test(
          comment.value
        )
      ) {
        violations.push(comment);
      }
    }
  }

  if (violations.length > 0) {
    const reason =
      "React Forget has bailed out of optimizing this component as one or more React eslint rules were disabled. React Forget only works when your components follow all the rules of React, disabling them may result in undefined behavior";
    const error = new CompilerError();
    for (const violation of violations) {
      error.pushErrorDetail(
        new CompilerErrorDetail({
          reason,
          description: violation.value.trim(),
          severity: ErrorSeverity.InvalidReact,
          loc: violation.loc ?? null,
          suggestions: [
            {
              description: "Remove the eslint disable",
              range: [violation.start!, violation.end!],
              op: CompilerSuggestionOperation.Remove,
            },
          ],
        })
      );
    }
    return error;
  } else {
    return null;
  }
}

// This is a hack to work around what seems to be a Babel bug. Babel doesn't
// consistently respect the `skip()` function to avoid revisiting a node within
// a pass, so we use this set to track nodes that we have compiled.
const ALREADY_COMPILED: WeakSet<object> | Set<object> = new (WeakSet ?? Set)();

export function compileProgram(
  program: NodePath<t.Program>,
  pass: CompilerPass
): void {
  const options = parsePluginOptions(pass.opts);
  // Record lint errors and critical errors as depending on Forget's config,
  // we may still need to run Forget's analysis on every function (even if we
  // have already encountered errors) for reporting.
  const lintError = findEslintSuppressions(pass.comments);
  let hasCriticalError = lintError != null;
  let hasForgetMutatedOriginalSource: boolean = false;

  const traverseFunction = (
    fn:
      | NodePath<t.FunctionDeclaration>
      | NodePath<t.FunctionExpression>
      | NodePath<t.ArrowFunctionExpression>,
    pass: CompilerPass
  ): void => {
    if (!shouldVisitNode(fn, pass) || ALREADY_COMPILED.has(fn.node)) {
      return;
    }

    // We may be generating a new FunctionDeclaration node, so we must skip over it or this
    // traversal will loop infinitely.
    // Ensure we avoid visiting the original function again.
    ALREADY_COMPILED.add(fn.node);
    fn.skip();

    if (lintError != null) {
      // Report lint suppressions as InvalidReact if we find forget-able
      // functions within the file
      handleError(pass, fn.node.loc ?? null, lintError);
    }

    let compiledFn: CodegenFunction;
    try {
      compiledFn = compileFn(fn, pass.opts.environment);
      pass.opts.logger?.logEvent(pass.filename, {
        kind: "CompileSuccess",
        fnLoc: fn.node.loc ?? null,
        fnName: compiledFn.id?.name ?? null,
        memoSlots: compiledFn.memoSlotsUsed,
      });
    } catch (err) {
      handleError(pass, fn.node.loc ?? null, err);

      hasCriticalError ||= isCriticalError(err);
      return;
    }

    if (pass.opts.noEmit) {
      return;
    } else if (!hasCriticalError) {
      // Only insert Forget-ified functions if we have not encountered a critical
      // error elsewhere in the file, regardless of bailout mode.
      insertNewFunctionDeclaration(fn, compiledFn, pass);
      hasForgetMutatedOriginalSource = true;
    }
  };

  // Main traversal to compile with Forget
  program.traverse(
    {
      ClassDeclaration(node: NodePath<t.ClassDeclaration>) {
        // Don't visit functions defined inside classes, because they
        // can reference `this` which is unsafe for compilation
        node.skip();
        return;
      },

      ClassExpression(node: NodePath<t.ClassExpression>) {
        // Don't visit functions defined inside classes, because they
        // can reference `this` which is unsafe for compilation
        node.skip();
        return;
      },

      FunctionDeclaration: traverseFunction,

      FunctionExpression: traverseFunction,

      ArrowFunctionExpression: traverseFunction,
    },
    {
      ...pass,
      opts: { ...pass.opts, ...options },
      filename: pass.filename ?? null,
    }
  );

  // Forget compiled the component, we need to update existing imports of unstable_useMemoCache
  if (hasForgetMutatedOriginalSource) {
    updateUseMemoCacheImport(program, options);
  }

  const externalFunctions: ExternalFunction[] = [];
  // TODO: check for duplicate import specifiers
  if (options.gating != null) {
    externalFunctions.push(options.gating);
  }
  if (options.instrumentForget != null) {
    externalFunctions.push(options.instrumentForget);
  }
  if (options.environment?.enableEmitFreeze != null) {
    externalFunctions.push(options.environment.enableEmitFreeze);
  }
  addImportsToProgram(program, externalFunctions);
}

function shouldVisitNode(
  fn: NodePath<
    t.FunctionDeclaration | t.ArrowFunctionExpression | t.FunctionExpression
  >,
  pass: CompilerPass
): boolean {
  if (hasUseMemoCacheCall(fn)) {
    return false;
  }
  if (fn.node.body.type === "BlockStatement") {
    // Opt-outs disable compilation regardless of mode
    if (hasAnyUseNoForgetDirectives(fn.node.body.directives)) {
      return false;
    }
    // Otherwise opt-ins enable compilation regardless of mode
    if (hasAnyUseForgetDirectives(fn.node.body.directives)) {
      return true;
    }
  }
  switch (pass.opts.compilationMode) {
    case "annotation": {
      // opt-ins are checked above
      return false;
    }
    case "infer": {
      return (
        // Component declarations are known components
        (fn.isFunctionDeclaration() && isComponentDeclaration(fn.node)) ||
        // Otherwise check if this is a component or hook-like function
        isReactFunctionLike(fn)
      );
    }
    case "all": {
      return fn.scope.getProgramParent() === fn.scope.parent;
    }
    default: {
      assertExhaustive(
        pass.opts.compilationMode,
        `Unexpected compilationMode '${pass.opts.compilationMode}'`
      );
    }
  }
}

function hasUseMemoCacheCall(
  fn: NodePath<
    t.FunctionDeclaration | t.FunctionExpression | t.ArrowFunctionExpression
  >
): boolean {
  let hasUseMemoCache = false;
  fn.traverse({
    Identifier(path) {
      if (
        path.node.name === "useMemoCache" ||
        path.node.name === "unstable_useMemoCache"
      ) {
        hasUseMemoCache = true;
      }
    },
  });
  return hasUseMemoCache;
}

function isHookName(s: string): boolean {
  return /^use[A-Z0-9]/.test(s);
}

/**
 * We consider hooks to be a hook name identifier or a member expression
 * containing a hook name.
 */

function isHook(path: NodePath<t.Expression | t.PrivateName>): boolean {
  if (path.isIdentifier()) {
    return isHookName(path.node.name);
  } else if (
    path.isMemberExpression() &&
    !path.node.computed &&
    isHook(path.get("property"))
  ) {
    const obj = path.get("object").node;
    const isPascalCaseNameSpace = /^[A-Z].*/;
    return obj.type === "Identifier" && isPascalCaseNameSpace.test(obj.name);
  } else {
    return false;
  }
}

/**
 * Checks if the node is a React component name. React component names must
 * always start with an uppercase letter.
 */

function isComponentName(path: NodePath<t.Expression>): boolean {
  return path.isIdentifier() && /^[A-Z]/.test(path.node.name);
}

function isReactFunction(
  path: NodePath<t.Expression | t.PrivateName | t.V8IntrinsicIdentifier>,
  functionName: string
): boolean {
  const node = path.node;
  return (
    (node.type === "Identifier" && node.name === functionName) ||
    (node.type === "MemberExpression" &&
      node.object.type === "Identifier" &&
      node.object.name === "React" &&
      node.property.type === "Identifier" &&
      node.property.name === functionName)
  );
}

/**
 * Checks if the node is a callback argument of forwardRef. This render function
 * should follow the rules of hooks.
 */

function isForwardRefCallback(path: NodePath<t.Expression>): boolean {
  return !!(
    path.parentPath.isCallExpression() &&
    path.parentPath.get("callee").isExpression() &&
    isReactFunction(path.parentPath.get("callee"), "forwardRef")
  );
}

/**
 * Checks if the node is a callback argument of React.memo. This anonymous
 * functional component should follow the rules of hooks.
 */

function isMemoCallback(path: NodePath<t.Expression>): boolean {
  return (
    path.parentPath.isCallExpression() &&
    path.parentPath.get("callee").isExpression() &&
    isReactFunction(path.parentPath.get("callee"), "memo")
  );
}

// Adapted from the ESLint rule at
// https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js#L90-L103
function isReactFunctionLike(
  node: NodePath<
    t.FunctionDeclaration | t.ArrowFunctionExpression | t.FunctionExpression
  >
): boolean {
  const functionName = getFunctionName(node);
  // Check if the name is component or hook like:
  if (
    functionName !== null &&
    (isComponentName(functionName) || isHook(functionName))
  ) {
    return (
      // As an added check we also look for hook invocations or JSX
      callsHooksOrCreatesJsx(node) &&
      // and avoid helper functions that take more than one argument
      // helpers are _usually_ named with lowercase, but some code may
      // violate this rule
      node.get("params").length <= 1
    );
  }
  // Otherwise for function or arrow function expressions, check if they
  // appear as the argument to React.forwardRef() or React.memo():
  if (node.isFunctionExpression() || node.isArrowFunctionExpression()) {
    if (isForwardRefCallback(node) || isMemoCallback(node)) {
      // As an added check we also look for hook invocations or JSX
      return callsHooksOrCreatesJsx(node);
    } else {
      return false;
    }
  }
  return false;
}

function callsHooksOrCreatesJsx(node: NodePath<t.Node>): boolean {
  let invokesHooks = false;
  let createsJsx = false;
  node.traverse({
    JSX() {
      createsJsx = true;
    },
    CallExpression(call) {
      const callee = call.get("callee");
      if (callee.isExpression() && isHook(callee)) {
        invokesHooks = true;
      }
    },
  });

  return invokesHooks || createsJsx;
}

/**
 * Gets the static name of a function AST node. For function declarations it is
 * easy. For anonymous function expressions it is much harder. If you search for
 * `IsAnonymousFunctionDefinition()` in the ECMAScript spec you'll find places
 * where JS gives anonymous function expressions names. We roughly detect the
 * same AST nodes with some exceptions to better fit our use case.
 */

function getFunctionName(
  path: NodePath<
    t.FunctionDeclaration | t.ArrowFunctionExpression | t.FunctionExpression
  >
): NodePath<t.Expression> | null {
  if (path.isFunctionDeclaration()) {
    const id = path.get("id");
    if (id.isIdentifier()) {
      return id;
    }
    return null;
  }
  let id: NodePath<t.LVal | t.Expression | t.PrivateName> | null = null;
  const parent = path.parentPath;
  if (parent.isVariableDeclarator() && parent.get("init").node === path.node) {
    // const useHook = () => {};
    id = parent.get("id");
  } else if (
    parent.isAssignmentExpression() &&
    parent.get("right").node === path.node &&
    parent.get("operator") === "="
  ) {
    // useHook = () => {};
    id = parent.get("left");
  } else if (
    parent.isProperty() &&
    parent.get("value").node === path.node &&
    !parent.get("computed") &&
    parent.get("key").isLVal()
  ) {
    // {useHook: () => {}}
    // {useHook() {}}
    id = parent.get("key");
  } else if (
    parent.isAssignmentPattern() &&
    parent.get("right").node === path.node &&
    !parent.get("computed")
  ) {
    // const {useHook = () => {}} = {};
    // ({useHook = () => {}} = {});
    //
    // Kinda clowny, but we'd said we'd follow spec convention for
    // `IsAnonymousFunctionDefinition()` usage.
    id = parent.get("left");
  }
  if (id !== null && (id.isIdentifier() || id.isMemberExpression())) {
    return id;
  } else {
    return null;
  }
}