
## Input

```javascript
function Component(props) {
  const [x, setX] = useState(null);

  const onChange = (e) => {
    let x = null; // intentionally shadow the original x
    setX((currentX) => currentX + x); // intentionally refer to shadowed x
  };

  return <input value={x} onChange={onChange} />;
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
  const $ = useMemoCache(4);
  const [x, setX] = useState(null);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = (e) => {
      setX((currentX) => currentX + null);
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const onChange = t0;
  let t1;
  if ($[1] !== x || $[2] !== onChange) {
    t1 = <input value={x} onChange={onChange} />;
    $[1] = x;
    $[2] = onChange;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: ["TodoAdd"],
  isComponent: "TodoAdd",
};

```
      