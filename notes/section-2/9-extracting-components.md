# Extracting Components (project structure!)

- don't just store all logic in `index.js`
- we'll create a new `App.js` file
  - has code to create component
-

# Steps to create a component

1. Create a new file, by convention it should start with a capital letter
2. Make a function that returns JSX, i.e. a component
3. export the component at the bottom of the file `export default App;`
4. import the component into another file `import App from './App';`
5. Use the component in the other file `<App />`
