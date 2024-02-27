
## Input

```javascript
function foo(a, b, c) {
  const [
    d,
    [
      {
        e: { f },
        ...g
      },
    ],
    ...h
  ] = a;
  const {
    l: {
      m: [[n], ...o],
    },
    p,
  } = b;
  return [d, f, g, h, n, o, p];
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
  const $ = useMemoCache(18);
  let t0;
  let d;
  let h;
  if ($[0] !== a) {
    [d, t0, ...h] = a;
    $[0] = a;
    $[1] = t0;
    $[2] = d;
    $[3] = h;
  } else {
    t0 = $[1];
    d = $[2];
    h = $[3];
  }
  const [t1] = t0;
  let t2;
  let g;
  if ($[4] !== t1) {
    ({ e: t2, ...g } = t1);
    $[4] = t1;
    $[5] = t2;
    $[6] = g;
  } else {
    t2 = $[5];
    g = $[6];
  }
  const { f } = t2;
  const { l: t51, p } = b;
  const { m: t3 } = t51;
  let t4;
  let o;
  if ($[7] !== t3) {
    [t4, ...o] = t3;
    $[7] = t3;
    $[8] = t4;
    $[9] = o;
  } else {
    t4 = $[8];
    o = $[9];
  }
  const [n] = t4;
  let t5;
  if (
    $[10] !== d ||
    $[11] !== f ||
    $[12] !== g ||
    $[13] !== h ||
    $[14] !== n ||
    $[15] !== o ||
    $[16] !== p
  ) {
    t5 = [d, f, g, h, n, o, p];
    $[10] = d;
    $[11] = f;
    $[12] = g;
    $[13] = h;
    $[14] = n;
    $[15] = o;
    $[16] = p;
    $[17] = t5;
  } else {
    t5 = $[17];
  }
  return t5;
}

export const FIXTURE_ENTRYPOINT = {
  fn: foo,
  params: ["TodoAdd"],
  isComponent: "TodoAdd",
};

```
      