
## Input

```javascript
function Component(props) {
  const maybeMutable = new MaybeMutable();
  return <div>{maybeMutate(maybeMutable)}</div>;
}

```

## Code

```javascript
import { unstable_useMemoCache as useMemoCache } from "react";
function Component(props) {
  const $ = useMemoCache(2);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    const maybeMutable = new MaybeMutable();
    t0 = maybeMutate(maybeMutable);
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = <div>{t0}</div>;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
}

```
      