
## Input

```javascript
// @validatePreserveExistingMemoizationGuarantees

import { useMemo } from "react";

// It's correct to produce memo blocks with fewer deps than source
function useFoo(a, b) {
  return useMemo(() => [a], [a, b]);
}

export const FIXTURE_ENTRYPOINT = {
  fn: useFoo,
  params: [1, 2],
};

```

## Code

```javascript
// @validatePreserveExistingMemoizationGuarantees

import { useMemo, unstable_useMemoCache as useMemoCache } from "react";

// It's correct to produce memo blocks with fewer deps than source
function useFoo(a, b) {
  const $ = useMemoCache(2);
  let t0;
  let t1;
  if ($[0] !== a) {
    t1 = [a];
    $[0] = a;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  t0 = t1;
  return t0;
}

export const FIXTURE_ENTRYPOINT = {
  fn: useFoo,
  params: [1, 2],
};

```
      
### Eval output
(kind: ok) [1]