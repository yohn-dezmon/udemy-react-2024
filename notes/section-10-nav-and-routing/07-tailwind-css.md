# other CSS frameworks

- Bulma, Bootstrap, Ant
- they give you a huge CSS file with a bunch of selectors
- each selector has rules, so you kind of enter into a contract
- you assign a component a selector's rules by using `className="card"`
- in this case a single className corresponds to set of styling rules

```css
.card {
  width: 200px;
  height: 600px;
  border: 1px solid gray;
}
```

-

# Tailwind CSS

- tailwind is similar to the other CSS frameworks but...
- each selector has a single style rule attached!

```css
.block {
  display: block;
}
.mr-1 {
  margin-right: 4px;
}
.w-2 {
  width: 8px;
}
```

- to apply styling, we apply a list of class names to our component!

```js
<div className="block mr-1 w-2 text-white bg-rd-500"> </div>
```

# Drawbacks (Tailwind)

- harder to read in the JSX...
- we have to look up different classnames/memorize them
- some CSS features don't work well with tailwind

# Benefits (Tailwind)

- the className soup is going to force you to write smaller and more reusable components
- smaller components are more reusable!

# Tailwind setup for our project

`npm install tailwindcss @tailwindcss/vite`
Update vite.config.js to import and use the tailwindscc plugin:
