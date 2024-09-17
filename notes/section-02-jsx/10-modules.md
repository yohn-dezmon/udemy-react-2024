# Modules (Vanilla JS)

- import/export statements
- variables aren't shared between files by default

# Export

- there is `default` and `named`
- one file can only have a single `default` export
- export default can be used to export either a variable or a component (function)
-

# Import steps

- `import App from './App'`
- first App is delcared as a variable in that file
- then you search in ./App for the export default App and get its data
- then that data is assigned to App in the original file

# Confusing thing #1

- Default exports can be renamed in the `importing` file
- since it's default, you could rename it `import MyApp from './App'`

# Named Export Statements

- use when exporting multiple variables (!!)
- can have as many named exports as we want
- there are 2 ways to write named exports

```javascript
const message = "hi";
export { message };
```

Single line:

```javascript
export const message = "hi";
```

# Importing named exports

- `import App, { message } from './App';`
- curly braces indicate we wanted a named export
- single import statement can get both default + named exports
- named exports **cannot** be renamed

# Relative paths

- when importing variables/components from our local project, we refer to the files based on their relative path to the file we're importing to (I think)
  - yes it is relative to the current file (!!)
- if there is no relative path, this means we are importing a 3rd party package, e.g. `import ReactDOM from 'react-dom/client'`
- if code is in `components/App.js`, import statement in `index.js` would be: `import App from './components/App'`;
- if we're in that same App.js file and need to import something from index.js: `import Thing from '../index'`

- `import Thin from '../../components/common/Button'`
