# Updating state

Did he ever explain how to properly assign IDs to objects?

- I think he said just use the ID from an API/db...

# explanation of why you need to use setBooks() instead of books.push()

the reason that `books.push()` doesn't work is because before react re-renders, it checks the current state of `books`. Since you have updated it, then you pass `books` to `setBooks` it sees that the objects are identical, so it does not rerender (!!)

# Solution to above problem?

- create a new array
- use the spread operator `...` to update the list with a new object
- `[...books, {id: 2, title: 'book 2'}]`
-

# this is for arrays, but be careful with state when it is an object as well

- i.e. don't do `arr.push()`
- i.e. do not do `colors[0] = 'blue'`;
- i.e. do not directly update the object with `obj['a'] = 'b'` or `obj.a = 'b'`
-

# CHEAT SHEET

https://state-updates.vercel.app/
https://state-updates.vercel.app/

# Adding elements to the start of an array

```js
const [colors, setColors] = useState([]);

const addColor = (newColor) => {
  const updatedColors = [newColor, ...colors];

  setColors(updatedColors);
};
```

- ok so do the spread operator AFTER the new element (!!)
- spread operator is a copy (not a cut) operation

# Adding elements to the end of an array

```js
const [colors, setColors] = useState([]);

const addColor = (newColor) => {
  const updatedColors = [...colors, newColor];

  setColors(updatedColors);
};
```

# Adding elements to the middle of an array

```js
const [colors, setColors] = useState([]);

const addColorAtIndex = (newColor, index) => {
  const updatedColors = [
    ...colors.slice(0, index), // upperbound is exclusive
    newColor,
    ...colors.slice(index), // lowerbound is inclusive
  ];

  setColors(updatedColors);
};
```

# Removing an element with a particular value

- `filter` always returns a new array
- FKT -- filter keeps true

```js
const [colors, setColors] = useState(["red", "green", "blue"]);

const removeColor = (colorToRemove) => {
  const updatedColors = colors.filter((color) => {
    return color !== colorToRemove;
  });

  setColors(updatedColors);
};
```

# Removing an element at an index

```js
const [colors, setColors] = useState(["red", "green", "blue"]);

const removeColor = (indexToRemove) => {
  const updatedColors = colors.filter((color, index) => {
    // don't forget to call `return` within filter (!!!!!)
    return indexToRemove !== index;
  });

  setColors(updatedColors);
};
```

# Removing an element with a given property

```js
const [books, setBooks] = useState([
  { id: 1, title: "Harry P." },
  { id: 2, title: "Pedro P." },
]);

const removeColor = (idToRemove) => {
  const updatedBooks = books.filter((book) => {
    return book.id !== idToRemove;
  });

  setBooks(updatedBooks);
};
```

# Modying an element based on a property (!!!)

- I had to do this at work recently
- `{...book, title: newTitle } `

```js
const [books, setBooks] = useState([
  { id: 1, title: "Harry P." },
  { id: 2, title: "Pedro P." },
]);

// re-assigning the title of a book, if you know its id
const updatedBookById = (id, newTitle) => {
  const updatedBooks = books.map((book) => {
    if (book.id === id) {
      return { ...book, title: newTitle };
    }
    // ok you also have to `return` for map (!!!)
    return book;
  });

  setBooks(updatedBooks);
};
```

- when to use `===` in JS vs `==`?

- in javascript, if you ever have duplicate keys, the earlier key will get removed

# Why use the spread operator?

- why not just set the value of a property in a state object?
  Because if we update a property on an object, it is still the same object. React only checks to see if you have a new object or not, if it is the same object, react will not rerender.

  FAILED ATTEMPT:

```js
const updateBookById = (id, title) => {
  // TODO: Find a book in the 'books' array with the given id
  const updatedBooks = books.map((book) => {
    if (book.id === id) {
      return { ...book, title: title };
    }
  });
  // Update that books 'title' property
  // Don't forget to update the 'books' state by calling 'setBooks'
  setBooks(updatedBooks);
};
```

SOLUTION:

```js
const updateBookById = (id, title) => {
  const updatedBooks = books.map((book) => {
    if (book.id === id) {
      return { ...book, title: title };
    }

    // you still want to return books with their existing titles if they are not the desired book
    return book;
  });

  setBooks(updatedBooks);
};
```

# Adding, Changing or Removing Object Properties

```js
const [fruit, setFruit] = useState({ color: "red", name: "apple" });

const changeColor = (color) => {
  const updatedFruit = {
    ...fruit,
    color: color,
  };

  setFruit(updatedFruit);
};
```

# Removing properties from an object

```js
const [fruit, setFruit] = useState({ color: "red", name: "apple" });

const removeColor = () => {
  // rest is the new variable name
  // color is the field we're removing
  const { color, ...rest } = fruit;

  setFruit(rest);
};
```
