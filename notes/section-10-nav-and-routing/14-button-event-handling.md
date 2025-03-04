# Button

- we made a custom component Button
- it will be used in place of <button />
- how to add a click event handler to <Button />?
- our Button renders a button
- Button receives a Props object with lots of props
- we can receive an `onClick` prop with `handleClick` as the value
- we need to pass down `onClick` to button (?)
  - this isn't a great solution
  - why?
  - bc this is just one of the many functionalities of `button`
  - e.g. `mouseOver` is another one that you'd have to custom implement

# Solution

- when we receive our props in Button, we'll list out the props we want to use...
- then we'll collect the remaining props...
- and we'll pass through those remainders into the button component
- `...rest` --special JS syntax... to get remaining properties.
  - `...` means get remaining properties
  - and assign them to the variable `rest`

```js
// from App.js

<Button primary rounded outline onClick={handleClick}>
// end App.js


function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  console.log(rest);
  const classes = twMerge(
    className("flex items-center px-3 py-1.5 border", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-500 bg-gray-500 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline, // results in conflicting classnames, later classname will override the earlier ones
      "text-blue-500": outline && primary,
      "text-gray-500": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    })
  );
  // underlying element
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
```

- the props you define have the match the names of the built in handlers on <button /> (!!!)
