# Props

- we'll use them to customize the ProfileCard instantiations
- props are used to communicate from parent component to child component
-

```javascript
function App() {
  return <Child color="red" />;
}

function Child(props) {
  return <div>{props.color}</div>;
}
```
