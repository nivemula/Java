
## Input

```javascript
function bar(a) {
  let x = [a];
  let y = {};
  (function () {
    y = x[0].a[1];
  })();

  return y;
}

export const FIXTURE_ENTRYPOINT = {
  fn: bar,
  params: [{ a: ["val1", "val2"] }],
  isComponent: false,
};

```

## Code

```javascript
import { unstable_useMemoCache as useMemoCache } from "react";
function bar(a) {
  const $ = useMemoCache(2);
  let y;
  if ($[0] !== a) {
    const x = [a];
    y = {};

    y;
    y = x[0].a[1];
    $[0] = a;
    $[1] = y;
  } else {
    y = $[1];
  }
  return y;
}

export const FIXTURE_ENTRYPOINT = {
  fn: bar,
  params: [{ a: ["val1", "val2"] }],
  isComponent: false,
};

```
      
### Eval output
(kind: ok) "val2"