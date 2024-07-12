# translation app

- codesandbox.io/s/react-pibc94
- completed code: codesandbox.io/s/react-forked-m5bz37

# critical questions

**What is react all about?**

- it displays HTML
- changes the HTML when user does something

**How do we tell react to show HTML?**

- we create functions that return `JSX`
- `JSX` looks like HTML
- this indicates what individual elements we want to display on the screen

React Components:

- these are the functions that return JSX
- tell react what to show on the screen
- a project can have many components that work together

```javascript
function App() {
  return (
    <div>
      <h3>Hello!</h3>
    </div>
  );
}
```

The app we just built had 5 different components inside of it.

JSX Tag:

- e.g. `<Field />`

JSX:
- can tell react to create a normal HTML element
- can tell react to show another component (e.g. JSX tag)
- JSX to create HTML begins with a lowercase character
- JSX to show another component begins with a capital letter `<ContactList />`


**How does a react app start up?**

1. all of your project's JS files are bundled together into a single file, then placed onto a server
    - this is done bc it is inefficient to send multiple files to a user's browser
2. user makes a request to the server and gets an HTML file + the bundle
3. user's browser executes your code



