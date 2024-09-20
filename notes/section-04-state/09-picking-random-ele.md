# Picking a Random Element

- you shouldn't modify pieces of state, e.g. `animals` directly
- instead, you iteratively recreate `animals` with each `setAnimals` call using the `...` operator

```javascript
const [animals, setAnimals] = useState([]);

// this is an arrow function
const handleClick = () => {
  // JS syntax for updating a list
  // ... creates a brand new array
  // animals.push(getRandomAnimal()) is an alternative
  // but the above MODIFIES a piece of state
  setAnimals([...animals, getRandomAnimal()]);
};
```

- what is the `[...array, ele]` syntax called in JS?
  - the **array spread syntax**
  - `...` is the spread operator
  - concise way ot create a new array that combines the elements of an existing array with other elements. It avoids directly mutating the original array.
