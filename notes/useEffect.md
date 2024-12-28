# useEffect

- called when component is initially rendered
- can optionally be used whenever the component is rerendered (state updated)
- first argument is an arrow function
- second argument is an array or nothing
  - sceond argument controls when our arrow function gets executed
- often used to call an async function (why?)

changes in state cause the component to rerender!

# 3 different ways to use useEffect

1. Empty array as second argument

- called after first render
- never called again

2. second argument is undefined

- called after first render
- called after all subsequent renders

3. second argument is a list with one or more variables

- called after first render
- called after rerender if the variable has been updated
