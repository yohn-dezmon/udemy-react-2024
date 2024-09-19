# Array Destructuring

- e.g. `const [count, setCount] = useState(0);`
- JS feature

```javascript
function makeArray() {
  return [1, 10, 32, 40];
}

const [firstEle, secondEle] = makeArray();
```

- the square brackets do not create an array
- the fact that we use brackets means the function must return an array (!!)

# Why does useState return an array?

- for each piece of state in React, the name of the state variable and setter must be unique
- if you returned an object the shortest alternative would be

```javascript
const { yourState: count, yourSetter: setCount } = useState(0);
```

- it makes it easy to access the two elements necessary for state management...
- it is for convenience
