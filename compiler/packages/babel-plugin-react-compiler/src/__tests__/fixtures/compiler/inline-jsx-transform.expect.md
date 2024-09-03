
## Input

```javascript
// @enableInlineJsxTransform @enableReactiveScopesInHIR
function Component(props) {
  return <Parent x="x" y={5}><Child /></Parent>
}
  
```

## Code

```javascript
import { c as _c } from "react/compiler-runtime"; // @enableInlineJsxTransform @enableReactiveScopesInHIR
function Component(props) {
  const $ = _c(1);
  Parent;
  ("x");
  5;
  Child;
  ({ $$typeof: Symbol.for("react.element") });
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = { $$typeof: Symbol.for("react.element") };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}

```
      
### Eval output
(kind: exception) Fixture not implemented