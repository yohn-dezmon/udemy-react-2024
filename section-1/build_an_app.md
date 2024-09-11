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

- client sends request to webserver
- webserver responds with an `index.html` file
  - the index.html file has some script tags or link tags that tell the browser to fetch more data from server
- 2nd request from client to server
- server returns bundle file

3. user's browser executes your code

Notes on index.html:

- there is a <div> tag within the <body> that has `id="root"` attribute
- `index.js` is the first file that gets loaded when the application starts
- `index.js` is within the `bundle.js` file

React startup process:

- find the div with id of `root` in the DOM
  - `const rootElement = document.getElementById('root')`
- Tell react to take control of that element
  - i.e. we will render our application into that element!
  - `const root = createRoot(rootElement)`
- Tell react to get JSX from the App component, turn it into HTML, and show it in the root
  - `root.render(<App />)`

**What are the `useState` functions?**

```javascript
// indicates that language can change over time
// es is the default value for language
const [language, setLanguage] = useState("es");
// indicates that text can change over time
const [text, setText] = useState("");
```

- `useState` is a function that works with React's `state` system
- State is like a variable in React
- state is used to store data that changes over time
- when state changes, React automatically updates content on the screen

State within our sample application:

- the text the user typed into the text input
- the language the user selected to translate text to
- the result of the translation

**How did we translate the text from one language to another?**

- Google translate API
- The Translate component was watching for `text` and `language` states
- if either of them changed, then an API call was made to Google Translate API with updated text/language

Node:

- `node -v`

Creating a new react app:

- `npx create-react-app <project-name>`
- takes a few minutes

Starting up a NodeJS server running react:

- cd jsx
- `npm start`
- available via `localhost:3000`
- CTRL+C to stop

create-react-app explanation:

- with the `npx create-react-app <project-name>` command you create a new NodeJS/React project
- index.js, App.js and reportWebVitals.js --> these contain code that a browser doesn't know how to execute. JSX != JS. Your browser doesn't know how to execute JSX.
- the purpose of using NodeJS is ultimately to take the JSX --> JS
- JS can run inside the browser
- converting JSX --> JS is done by the `dev server`
- `Babel` is the tool that converts JSX to JS
- `Webpack` is a tool to merge all project files into a single file (outputs bundle.js or whatever you choose to call it)

index.js:

- first file that gets executed when our app runs

index.html:

- skeleton for the React app

package.json:

- lists dependencies our app needs

package-lock.json:

- list dependencies our app needs

node-modules:

- contains the dependencies our app needs

Components are written in separate files, App.js is the main component that coordinates all of the other components.
