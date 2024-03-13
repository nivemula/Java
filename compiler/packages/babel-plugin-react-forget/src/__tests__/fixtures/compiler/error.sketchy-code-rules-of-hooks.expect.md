
## Input

```javascript
/* eslint-disable react-hooks/rules-of-hooks */
function lowercasecomponent() {
  const x = [];
  return <div>{x}</div>;
}
/* eslint-enable react-hooks/rules-of-hooks */

export const FIXTURE_ENTRYPOINT = {
  fn: lowercasecomponent,
  params: [],
  isComponent: false,
};

```


## Error

```
> 1 | /* eslint-disable react-hooks/rules-of-hooks */
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ [ReactForget] InvalidReact: React Forget has bailed out of optimizing this component as one or more React eslint rules were disabled. React Forget only works when your components follow all the rules of React, disabling them may result in undefined behavior. eslint-disable react-hooks/rules-of-hooks (1:1)
  2 | function lowercasecomponent() {
  3 |   const x = [];
  4 |   return <div>{x}</div>;
```
          
      