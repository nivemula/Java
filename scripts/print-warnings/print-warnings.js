/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const babelParser = require('@babel/parser');
const fs = require('fs');
const through = require('through2');
const traverse = require('@babel/traverse').default;
const gs = require('glob-stream');

const {evalStringConcat} = require('../shared/evalToString');

const parserOptions = {
  sourceType: 'module',
  // babelParser has its own options and we can't directly
  // import/require a babel preset. It should be kept **the same** as
  // the `babel-plugin-syntax-*` ones specified in
  // https://github.com/facebook/fbjs/blob/master/packages/babel-preset-fbjs/configure.js
  plugins: [
    'classProperties',
    'flow',
    'jsx',
    'trailingFunctionCommas',
    'objectRestSpread',
  ],
};

const warnings = new Set();

function transform(file, enc, cb) {
  fs.readFile(file.path, 'utf8', function (err, source) {
    if (err) {
      cb(err);
      return;
    }

    let ast;
    try {
      ast = babelParser.parse(source, parserOptions);
    } catch (error) {
      console.error('Failed to parse source file:', file.path);
      throw error;
    }

    traverse(ast, {
      CallExpression: {
        exit: function (astPath) {
          const callee = astPath.get('callee');
          if (
            callee.matchesPattern('console.warn') ||
            callee.matchesPattern('console.error')
          ) {
            const node = astPath.node;
            if (node.callee.type !== 'MemberExpression') {
              return;
            }
            if (node.callee.property.type !== 'Identifier') {
              return;
            }
            // warning messages can be concatenated (`+`) at runtime, so here's
            // a trivial partial evaluator that interprets the literal value
            try {
              const warningMsgLiteral = evalStringConcat(node.arguments[0]);
              warnings.add(JSON.stringify(warningMsgLiteral));
            } catch (error) {
              // Silently skip over this call. We have a lint rule to enforce
              // that all calls are extractable, so if this one fails, assume
              // it's intentional.
              return;
            }
          }
        },
      },
    });

    cb(null);
  });
}

gs([
  'packages/**/*.js',
  '!packages/*/npm/**/*.js',
  '!packages/shared/consoleWithStackDev.js',
  '!packages/react-devtools*/**/*.js',
  '!**/__tests__/**/*.js',
  '!**/__mocks__/**/*.js',
  '!**/node_modules/**/*.js',
  // TODO: The newer Flow type syntax in this file breaks the parser and I can't
  // figure out how to get Babel to parse it. I wasted too much time on
  // something so unimportant so I'm skipping this for now. There's no actual
  // code or warnings in this file anyway.
  '!packages/shared/ReactTypes.js',
]).pipe(
  through.obj(transform, cb => {
    process.stdout.write(Array.from(warnings).sort().join('\n') + '\n');
    cb();
  })
);