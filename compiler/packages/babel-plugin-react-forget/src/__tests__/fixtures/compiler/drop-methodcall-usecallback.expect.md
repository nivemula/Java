
## Input

```javascript
import * as React from "react";

function Component(props) {
  const onClick = React.useCallback(() => {
    console.log(props.value);
  }, [props.value]);
  return <div onClick={onClick} />;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{ value: 42 }],
};

```

## Code

```javascript
import { unstable_useMemoCache as useMemoCache } from "react";
import * as React from "react";

function Component(props) {
  const $ = useMemoCache(4);
  let t0;
  if ($[0] !== props.value) {
    t0 = () => {
      console.log(props.value);
    };
    $[0] = props.value;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  const onClick = t0;
  let t1;
  if ($[2] !== onClick) {
    t1 = <div onClick={onClick} />;
    $[2] = onClick;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{ value: 42 }],
};

```
      