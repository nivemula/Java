
## Input

```javascript
function foo(a, b, c) {
  let x = [];
  if (a) {
    if (b) {
      if (c) {
        x.push(0);
      }
    }
  }
  if (x.length) {
    return x;
  }
  return null;
}

export const FIXTURE_ENTRYPOINT = {
  fn: foo,
  params: ["TodoAdd"],
  isComponent: "TodoAdd",
};

```

## Code

```javascript
import { unstable_useMemoCache as useMemoCache } from "react";
function foo(a, b, c) {
  const $ = useMemoCache(4);
  let x;
  if ($[0] !== a || $[1] !== b || $[2] !== c) {
    x = [];
    if (a) {
      if (b) {
        if (c) {
          x.push(0);
        }
      }
    }
    $[0] = a;
    $[1] = b;
    $[2] = c;
    $[3] = x;
  } else {
    x = $[3];
  }
  if (x.length) {
    return x;
  }
  return null;
}

export const FIXTURE_ENTRYPOINT = {
  fn: foo,
  params: ["TodoAdd"],
  isComponent: "TodoAdd",
};

```
      