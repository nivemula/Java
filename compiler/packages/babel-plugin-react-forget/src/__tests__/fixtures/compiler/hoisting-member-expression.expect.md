
## Input

```javascript
function hoisting() {
  function onClick(x) {
    return x + bar.baz;
  }
  const bar = { baz: 1 };

  return <Button onClick={onClick} />;
}

export const FIXTURE_ENTRYPOINT = {
  fn: hoisting,
  params: [],
  isComponent: false,
};

```

## Code

```javascript
import { unstable_useMemoCache as useMemoCache } from "react";
function hoisting() {
  const $ = useMemoCache(2);
  let onClick;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    onClick = function onClick(x) {
      return x + bar.baz;
    };

    const bar = { baz: 1 };
    $[0] = onClick;
  } else {
    onClick = $[0];
  }
  let t0;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = <Button onClick={onClick} />;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  return t0;
}

export const FIXTURE_ENTRYPOINT = {
  fn: hoisting,
  params: [],
  isComponent: false,
};

```
      