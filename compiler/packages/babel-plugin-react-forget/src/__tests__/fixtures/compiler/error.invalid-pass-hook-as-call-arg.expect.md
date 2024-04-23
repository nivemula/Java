
## Input

```javascript
function Component(props) {
  return foo(useFoo);
}

```


## Error

```
  1 | function Component(props) {
> 2 |   return foo(useFoo);
    |              ^^^^^^ InvalidReact: Hooks may not be referenced as normal values, they must be called. See the Rules of Hooks (https://react.dev/warnings/invalid-hook-call-warning) (2:2)
  3 | }
  4 |
```
          
      