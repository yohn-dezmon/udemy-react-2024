# List Building in React

- showing lists of elements to users is a very common use case in React/UIs
- e.g. list of emails, list of youtube videos, lists of products, etc.
- we want to transform each element in the array into a component. e.g. go from `'cat'` -> `<AnimalShow type="cat" />`
  - use `.map()` (JS function)

# .map()

- take every element in an array
- one by one, pass it into a transform function
- then output transformed value into a new array
- return the array with all transformed values

```javascript
const renderedAnimals = animals.map((animal, index) => {
  return <AnimalShow type={animal} key={index} />;
});
```

- we use `key={index}` as a requirement with React
  - React wants to be able to uniquely identify each element that you are returning inside of a list
