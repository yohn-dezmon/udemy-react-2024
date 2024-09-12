# Typical Component Layouts

- typically we compute values/store variables at the top of the component
- then we return our divs/JSX elements with those values as curly braces

```javascript
function App() {
  const name = "Sam";
  const age = 23;

  return (
    <h1>
      Hi, my name is {name}. I am {age}.
    </h1>
  );
}
```
