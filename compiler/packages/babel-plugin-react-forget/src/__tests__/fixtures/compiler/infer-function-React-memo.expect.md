
## Input

```javascript
// @compilationMode(infer)
React.memo((props) => {
  return <div />;
});

```

## Code

```javascript
import { unstable_useMemoCache as useMemoCache } from "react"; // @compilationMode(infer)
React.memo((props) => {
  const $ = useMemoCache(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = <div />;
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
});

```
      