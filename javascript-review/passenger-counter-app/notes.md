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

innerText alternative mdn:

- `Node.textContent`
- Node here means HTML element (sort of)
- innerText only shows "human readable" elements
- innerText is aware of styling and won't return text of hidden elements
  - a space is not considered "human readable"

Javascript memory:

- a javascript script will remember previous state until you refresh the page!

Currently we are using the `onClick` event listener on an HTML element:

- however this is not used in production codebases
- there are better ways to do this such that HTML and Javascript are easier to maintain separately

Netlify:

- you can deploy React apps with it
- Change title
- Background image
- Font (from list) -- make it the first in the list
- update button colors/appearance (width, border, etc.)
- wrap a div around the HTML, add a max width (you should do this before deploying things)

Images:

- she updated the image by going to `body { background-image: url("filename.jpg");}` in the `.css` file
- she set height to 100vh --> it will take up 100% of the current height.
- margin: auto --> stays centered.

More Netlify Notes:

- connect it to github
- connect it to a repo
- then you can put JS/CSS/HTML files in a repo, and deploy it, and voila! You have a website on the internet! That's awesome!

Review:

- <script src="file.js"> tag (!!) </script>
- variables are set with `let`
- `console.log()` to print things
- `function save() { }`
- an `onclick` attribute in a HTML tag allows you to set a function as a callback
- `onclick=save()`
- `document` --> this is the DOM
- `document.getElementById()`
- `document.getElementById().textContent`
