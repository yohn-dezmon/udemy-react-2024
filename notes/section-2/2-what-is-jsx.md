# What is JSX

We write:

```js
<h1>Hi there!</h1>
```

Babel takes that as input and outputs:

```javascript
React.createElement("h1", null, "Hi there!");
```

^ That is run in the browser.

createElement outputs this:

```javascript
{
    $$typeof: Symbol(react.element),
    key: null,
    props: { children: 'Hi there!' },
    ref: null,
    type: 'h1'
}
```

# Babel Repl tool

- `babeljs.io/repl`
- tool to show you what your JSX is turned into.

Why do we use JSX at all instead of the `React` library that JSX produces (e.g. `React.createElement()`)?

- it's much more intuitive to understand what you're outputing to the screen this way.

# JSX

- JSX by itself won't render, it needs to be **returned** by a Component
  - i.e. if you have JSX inside your Component but you don't include it in the object that gets returned from the final line of the Component, it will not show up on the screen !!
- JSX creates an instruction for React to make an element
