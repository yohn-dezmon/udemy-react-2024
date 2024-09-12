# Customizing Elements with Props

- e.g. `<input />` is for taking in user input, but let's say you want to make it specificaly for numerical inputs
  - if you wanted to do this with plain HTML, google "mdn number input"
  -
- Props are similar to attributes on HTML elements (!!)
- `type="number"`
  - `type` -- name of the property we want to customize
  - `"number"` value for the property

```javascript
function App() {
  return <input type="number" />;
}
```

- there are small differences between JSX props and HTML attributes
- you can set the value of a prop to be curly braces to refrence a JS variable!

```javascript
function App() {
  const inputType = "number";
  const minValue = 5;

  return <input type={inputType} min={minValue} />;
}
```

# Important note:

- syntax for putting strings/numbers into elements directly is a bit weird
- you have to wrap strings in **double quotes**
- you have to wrap numbers in **curly braces**

```javascript
function App() {
  return <input type="number" min={5} />;
}
```

- if you want to provide an array -- wrap with curly braces
- objects -- wrap with curly braces
- variables -- wrap with curly braces

```javascript
function App() {
  return (
    <input
      type="number"
      min={5}
      max={10}
      list={[1, 2, 3]}
      style={{ color: "red" }}
      alt={message}
    />
  );
}
```

# Objects and props

- objects CAN be passed in as prop values
- you CANNOT display an object (within an element)
