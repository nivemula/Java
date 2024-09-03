
## Input

```javascript
// @enableInlineJsxTransform @enableReactiveScopesInHIR
function SimpleComponent(props) {
  return <div />
}

function SimpleCustomComponent(props) {
  return <SimpleComponent />;
}

function SpecialProps(props) {
  const testRef = useRef();
  return <div key={'testKey'} ref={testRef} />
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

function SimpleCustomComponent(props) {
  const $ = _c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      $$typeof: Symbol.for("react.element"),
      type: SimpleComponent,
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

function SpecialProps(props) {
  const $ = _c(1);
  const testRef = useRef();
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      $$typeof: Symbol.for("react.element"),
      type: "div",
      ref: testRef,
      key: "testKey",
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