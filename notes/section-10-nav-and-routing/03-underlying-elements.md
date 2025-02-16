How to build a component with buttons of these different variations?

1. Create one component for each variation (not good)
2. Create one button component, and customize what it looks like with props

- by itself it will create just a plain button

```js
// wrapper
function Button() {
  // underlying element
  return <button></button>;
}
```
