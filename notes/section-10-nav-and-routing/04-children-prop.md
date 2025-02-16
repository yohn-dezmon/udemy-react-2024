# Allowing what is inside two start/end tags to be pulled into a component

- e.g. `<button> sample text </button>` --> being able to pass down "sample text" to a component
- to access this in the child component, use the special prop `children` (!!!)

```js
function App() {
  return <Button>Click!</Button>;
}
```

```js
function Button({ children }) {
  return <button>{children}</button>;
}
```
