# Printing JavaScript Variables in JSX

- use curly braces to return a variable from a component
- we most often use this syntax for printing a string or a number
    - react won't render booleans or other types
    - renders arrays in unexpected manner
    - doesnt render nulls 
    - if you try to render an object, you will get an error message in the console. "Objects are not valid as React children"

```javascript
function App() {
  let message = "Bye there!";
  if (Math.random() > 0.5) {
    message = "Hello there!";
  }

  return <h1>{message}</h1>;
}
```
