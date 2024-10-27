# State

- used when you want to update content on the screen
- calling useState defines a new piece of state
- first argument to useState is used as a default value
- updating state is done only through the setter fn
- calling the setter fn causes react to rerender the component

# Events

- specific user interactions are defined by HTML tags like `onClick=`
- the value of these we set to event handlers (react)
- event handlers are named like (` handle``<thing-we-want-to_handle> `)

# Lists

- mapping function
- take an array of strings and output a component per string

```js
const renderedAnimals = animals.map((ele, index) => {
  return <AnimalShow key={index} type={ele} />;
});

return (
  <div className="app">
    <button onClick={handleClick}>Add animal</button>
    <div className="animal-list">{renderedAnimals}</div>
  </div>
);
```
