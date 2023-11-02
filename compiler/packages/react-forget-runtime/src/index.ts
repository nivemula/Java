/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from "react";

const {
  // @ts-ignore
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentDispatcher,
  },
  useRef,
  useEffect,
} = React;

type MemoCache = Array<number | typeof $empty>;

const $empty = Symbol.for("react.memo_cache_sentinel");
/**
 * DANGER: this hook is NEVER meant to be called directly!
 **/
export function unstable_useMemoCache(size: number) {
  "use no forget";
  return React.useState(() => {
    const $ = new Array(size);
    for (let ii = 0; ii < size; ii++) {
      $[ii] = $empty;
    }
    return $;
  })[0];
}

export function $read(memoCache: MemoCache, index: number) {
  const value = memoCache[index];
  if (value === $empty) {
    throw new Error("useMemoCache: read before write");
  }
  return value;
}

const LazyGuardDispatcher: { [key: string]: () => never } = {};
[
  "readContext",
  "useCallback",
  "useContext",
  "useEffect",
  "useImperativeHandle",
  "useInsertionEffect",
  "useLayoutEffect",
  "useMemo",
  "useReducer",
  "useRef",
  "useState",
  "useDebugValue",
  "useDeferredValue",
  "useTransition",
  "useMutableSource",
  "useSyncExternalStore",
  "useId",
  "unstable_isNewReconciler",
  "getCacheSignal",
  "getCacheForType",
  "useCacheRefresh",
].forEach((name) => {
  LazyGuardDispatcher[name] = () => {
    throw new Error(`Cannot call ${name} within ReactForget lazy block.`);
  };
});

let originalDispatcher: unknown = null;

export function $startLazy() {
  if (originalDispatcher !== null) {
    throw new Error("unexpected startLazy with dispatcher set");
  }
  originalDispatcher = ReactCurrentDispatcher.current;
  ReactCurrentDispatcher.current = LazyGuardDispatcher;
}

export function $endLazy() {
  if (originalDispatcher === null) {
    throw new Error("unexpected endLazy with dispatcher not set");
  }
  ReactCurrentDispatcher.current = originalDispatcher;
  originalDispatcher = null;
}

export function $reset($: MemoCache) {
  for (let ii = 0; ii < $.length; ii++) {
    $[ii] = $empty;
  }
}

export function $makeReadOnly() {
  throw new Error("TODO: implement $makeReadOnly in react-forget-runtime");
}

/**
 * Instrumentation to count rerenders in React components
 */
export const renderCounterRegistry: Map<
  string,
  Set<{ count: number }>
> = new Map();
export function clearRenderCounterRegistry() {
  for (const counters of renderCounterRegistry.values()) {
    counters.forEach((counter) => {
      counter.count = 0;
    });
  }
}

function registerRenderCounter(name: string, val: { count: number }) {
  let counters = renderCounterRegistry.get(name);
  if (counters == null) {
    counters = new Set();
    renderCounterRegistry.set(name, counters);
  }
  counters.add(val);
}

function removeRenderCounter(name: string, val: { count: number }): void {
  const counters = renderCounterRegistry.get(name);
  if (counters == null) {
    return;
  }
  counters.delete(val);
}

export function useRenderCounter(name: string): void {
  const val = useRef<{ count: number }>(null);

  if (val.current != null) {
    val.current.count += 1;
  }
  useEffect(() => {
    // Not counting initial render shouldn't be a problem
    if (val.current == null) {
      const counter = { count: 0 };
      registerRenderCounter(name, counter);
      // @ts-ignore
      val.current = counter;
    }
    return () => {
      if (val.current !== null) {
        removeRenderCounter(name, val.current);
      }
    };
  });
}