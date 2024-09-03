
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
  return <div key='testKey' ref={testRef} />
}

function CustomProps(props) {
  return <Component a='a' b={{b: 'b'}} c={C} />
}

function AllProps(props) {
  const testRef = useRef();
  return <Component a='a' b={{b: 'b'}} c={C} key='testKey' ref={testRef} />
}

function ParentAndChildren(props) {
  return (
    <Parent foo='bar'>
      <Child key='a' />
      <Child key='b'>
        <GrandChild className='gc-1' />
      </Child>
    </Parent>
  )
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

function CustomProps(props) {
  const $ = _c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      $$typeof: Symbol.for("react.element"),
      type: Component,
      ref: null,
      key: null,
      props: { a: "a", b: { b: "b" }, c: C },
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}

function AllProps(props) {
  const $ = _c(1);
  const testRef = useRef();
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      $$typeof: Symbol.for("react.element"),
      type: Component,
      ref: testRef,
      key: "testKey",
      props: { a: "a", b: { b: "b" }, c: C },
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}

function ParentAndChildren(props) {
  const $ = _c(2);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      $$typeof: Symbol.for("react.element"),
      type: Child,
      ref: null,
      key: "a",
      props: {},
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      $$typeof: Symbol.for("react.element"),
      type: Parent,
      ref: null,
      key: null,
      props: {
        foo: "bar",
        children: [
          t0,
          {
            $$typeof: Symbol.for("react.element"),
            type: Child,
            ref: null,
            key: "b",
            props: {
              children: [
                {
                  $$typeof: Symbol.for("react.element"),
                  type: GrandChild,
                  ref: null,
                  key: null,
                  props: { className: "gc-1" },
                },
              ],
            },
          },
        ],
      },
    };
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
}

```
      
### Eval output
(kind: exception) Fixture not implemented