
## Input

```javascript
import * as React from "react";
import { useState, useMemo } from "react";

function Component(props) {
  const [x] = useState(0);
  const expensiveNumber = useMemo(() => calculateExpensiveNumber(x), [x]);

  return <div>{expensiveNumber}</div>;
}

function Component2(props) {
  const [x] = useState(0);
  const expensiveNumber = useMemo(() => calculateExpensiveNumber(x), [x]);

  return <div>{expensiveNumber}</div>;
}

```

## Code

```javascript
import * as React from "react";
import {
  useState,
  useMemo,
  unstable_useMemoCache as useMemoCache,
} from "react";

function Component(props) {
  const $ = useMemoCache(4);
  const [x] = useState(0);
  let t15;
  let t0;
  if ($[0] !== x) {
    t0 = calculateExpensiveNumber(x);
    $[0] = x;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  t15 = t0;
  const expensiveNumber = t15;
  let t1;
  if ($[2] !== expensiveNumber) {
    t1 = <div>{expensiveNumber}</div>;
    $[2] = expensiveNumber;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}

function Component2(props) {
  const $ = useMemoCache(4);
  const [x] = useState(0);
  let t15;
  let t0;
  if ($[0] !== x) {
    t0 = calculateExpensiveNumber(x);
    $[0] = x;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  t15 = t0;
  const expensiveNumber = t15;
  let t1;
  if ($[2] !== expensiveNumber) {
    t1 = <div>{expensiveNumber}</div>;
    $[2] = expensiveNumber;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}

```
      