
## Input

```javascript
function Component(props) {
  const { x: { y } = { y: "default" } } = props.y;
  return y;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: ["TodoAdd"],
  isComponent: "TodoAdd",
};

```

## Code

```javascript
import { unstable_useMemoCache as useMemoCache } from "react";
function Component(props) {
  const $ = useMemoCache(2);
  const { x: t0 } = props.y;
  let t1;
  if ($[0] !== t0) {
    t1 = t0 === undefined ? { y: "default" } : t0;
    $[0] = t0;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const { y } = t1;
  return y;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: ["TodoAdd"],
  isComponent: "TodoAdd",
};

```
      