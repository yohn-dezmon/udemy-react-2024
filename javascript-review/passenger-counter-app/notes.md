# Passenger Counter App

- <script> tag allows you to write JS </script>
- things within the <> that are not tags themselves, are `attributes` :D
  - e.g. <script src=""></script> here `src` is an attribute
  - src --> points to a file

Javascript variables:

- use `let` before the variable name
- these variables can be reassigned to new values

Printing to console:

- `console.log()`

Getting to console in browser:

- Inspect
- Console

Button in HTML:

- <button> is the tag.
- to listen for clicks on the button you can use the `onclick=""` attribute
- inside the quotes, write the function you want to be triggered when the function is clicked
- `onclick="increment()"`

Javascript functions:

- function functionName() { }
- I think javascript uses CamelCase by default...

for loops in javascript:

- idk the syntax bc we always used lodash

```javascript
// call increment() 3 times
for (let i = 0; i < 3; i++) {
  increment();
}
```

how do I change the `count-el` in the HTML to reflect the new count?

- `count-el` is a value for the id attribute within the h2 tag

```javascript
document.getElementById("count-el").innerText = count;
```

document.getElementById:

- if you do `console.log(document.getElementById("count-el"))` it will output the HTML element/tag to the console!
- `<h2 id='count-el'>`

DOM:

- document object model
- use JS to modify a website
- document: HTML document
- object: the document keyword in JS is of the type `object`
- model: representation of the HTML document within the JS code `document`


onclick:
- this is an attribute which allows you to link an HTML element with a JS function
- `onclick="save()"`
