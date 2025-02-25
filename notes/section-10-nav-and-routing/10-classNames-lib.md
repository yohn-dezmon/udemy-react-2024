# The ClassNames Library

- it is called `classnames`
- but we call the prop `className`...

```js
classNames("bg-blue-500", "px-3", "py-1.5");
```

^ this concatenates the strings with space delimiters.

```js
let bgColor = undefined;
if (primary) {
    bgColor = 'bg-blue-500':
}
classNames(bgColor, 'px-3', 'py-1.5')
```

^ classNames function will ignore any undefined values
`px-3 py-1.5`

```js
const primary = true;
const warning = false;

classNames({
  "bg-blue-500": primary,
  "bg-yellow-500": warning,
});
```

^ (this is what we actually use)

- if any of the values of the key-value pairs is truthy, it will take the key and add it to the string you are concatenating
- so from above we would expect only `bg-blue-500`

`npm install classnames`

```js
// if you pass in something before the object, that will get added to the string
// no matter what
const finalClassName = className("px-1.5", {
  "bg-blue-500": true,
  "text-yellow-500": true,
});
```
