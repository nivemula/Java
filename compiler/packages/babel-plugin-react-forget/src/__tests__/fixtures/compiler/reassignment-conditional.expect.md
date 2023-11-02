
## Input

```javascript
function Component(props) {
  let x = [];
  x.push(props.p0);
  let y = x;

  if (props.p1) {
    x = [];
  }

  y.push(props.p2);

  return <Component x={x} y={y} />;
}

```

## Code

```javascript
import { unstable_useMemoCache as useMemoCache } from "react";
function Component(props) {
  const $ = useMemoCache(9);
  let x;
  let y;
  if ($[0] !== props.p0 || $[1] !== props.p1 || $[2] !== props.p2) {
    x = [];
    x.push(props.p0);
    y = x;
    if (props.p1) {
      let t0;
      if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[5] = t0;
      } else {
        t0 = $[5];
      }
      x = t0;
    }

    y.push(props.p2);
    $[0] = props.p0;
    $[1] = props.p1;
    $[2] = props.p2;
    $[3] = x;
    $[4] = y;
  } else {
    x = $[3];
    y = $[4];
  }
  let t1;
  if ($[6] !== x || $[7] !== y) {
    t1 = <Component x={x} y={y} />;
    $[6] = x;
    $[7] = y;
    $[8] = t1;
  } else {
    t1 = $[8];
  }
  return t1;
}

```
      