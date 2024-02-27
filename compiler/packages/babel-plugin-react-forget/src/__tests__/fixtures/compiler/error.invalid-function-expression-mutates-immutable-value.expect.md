
## Input

```javascript
function Component(props) {
  const [x, setX] = useState({ value: "" });
  const onChange = (e) => {
    // INVALID! should use copy-on-write and pass the new value
    x.value = e.target.value;
    setX(x);
  };
  return <input value={x.value} onChange={onChange} />;
}

```


## Error

```
  3 |   const onChange = (e) => {
  4 |     // INVALID! should use copy-on-write and pass the new value
> 5 |     x.value = e.target.value;
    |     ^^^^^^^ [ReactForget] InvalidReact: Mutating a value returned from a function that should not be mutated. (5:5)
  6 |     setX(x);
  7 |   };
  8 |   return <input value={x.value} onChange={onChange} />;
```
          
      