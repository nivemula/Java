
## Input

```javascript
function Component(props) {
  const x = useMemo(() => {
    let y;
    switch (props.switch) {
      case "foo": {
        return "foo";
      }
      case "bar": {
        y = "bar";
        break;
      }
      default: {
        y = props.y;
      }
    }
    return y;
  });
  return x;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: ["TodoAdd"],
  isComponent: "TodoAdd",
};

```

## Code

```javascript
function Component(props) {
  let t21;
  bb10: {
    let y;
    bb2: switch (props.switch) {
      case "foo": {
        t21 = "foo";
        break bb10;
      }
      case "bar": {
        y = "bar";
        break bb2;
      }
      default: {
        y = props.y;
      }
    }

    t21 = y;
  }
  const x = t21;
  return x;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: ["TodoAdd"],
  isComponent: "TodoAdd",
};

```
      