
## Input

```javascript
// @flow @compilationMode(infer) 
export default component Foo(bar: number) {
  return <Bar bar={bar} />;
}

function shouldNotCompile() {}
```

## Code

```javascript
import { unstable_useMemoCache as useMemoCache } from "react";
export default function Foo(t7) {
  const $ = useMemoCache(2);
  const { bar } = t7;
  let t0;
  if ($[0] !== bar) {
    t0 = <Bar bar={bar} />;
    $[0] = bar;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  return t0;
}

function shouldNotCompile() {}

```
      