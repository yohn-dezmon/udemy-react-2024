# Styling

- we're going to have App.css and AnimalShow.css files that will style their respective components
- we import the CSS files into our component files

```javascript
// for CSS we don't want to read it into a variable
// we want to load the CSS directly into the browser
import "./App.css";
```

- we find divs that we want to target
- we give them `className='name'` attributes
- we define those class' styles in the CSS with the same name
- selectors...
  - find all of the elements in the HTML document with a class name of "x"
  - e.g. .x { }
- the alternative to selectors is just the name of an HTML element (!!)
  - e.g. button
  - this applies a style to all of those HTML elements
