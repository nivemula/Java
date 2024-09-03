
## Input

```javascript
// @enableInlineJsxTransform @enableReactiveScopesInHIR
function SimpleComponent(props) {
  return <div />
}
```

## Code

```javascript
import { c as _c } from "react/compiler-runtime"; // @enableInlineJsxTransform @enableReactiveScopesInHIR
function SimpleComponent(props) {
  const $ = _c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      $$typeof: Symbol.for("react.element"),
      type: "div",
      ref: null,
      key: null,
      props: {},
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}

```
      
### Eval output
(kind: exception) Fixture not implemented