
## Input

```javascript
function g(props) {
  const a = { b: { c: props.c } };
  a.b.c = a.b.c + 1;
  a.b.c *= 2;
  return a;
}

export const FIXTURE_ENTRYPOINT = {
  fn: g,
  params: [{ c: 2 }],
  isComponent: false,
};

```

## Code

```javascript
import { unstable_useMemoCache as useMemoCache } from "react";
function g(props) {
  const $ = useMemoCache(2);
  let a;
  if ($[0] !== props.c) {
    a = { b: { c: props.c } };
    a.b.c = a.b.c + 1;
    a.b.c = a.b.c * 2;
    $[0] = props.c;
    $[1] = a;
  } else {
    a = $[1];
  }
  return a;
}

export const FIXTURE_ENTRYPOINT = {
  fn: g,
  params: [{ c: 2 }],
  isComponent: false,
};

```
      