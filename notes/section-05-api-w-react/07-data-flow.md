# Data Flow

Where do we do data fetching?

Where do owe define state?

How do we share info between components?

- always go through parents

# This App

- the SearchBar component contains the text input a user will type into
- the user pressing `enter` key in the text input means we have to do a search
- we have a function that will turn a search term into an array of image objects (`searchImages()`)
- the array of image objects needs to get into the ImageList component

# Component Hierarchy

```
App
/ \
SearchBar Image List
          /       \
 ImageShow... ImageShow
```

`term` will live within SearchBar component
`searchImages()`
`images` will live within `ImageList`

# Sister components

You should not have `searchImages()` in sister components, because they cannot directly communicate!

Therefore we will put `searchImages()` in the App parent component.

- therefore we need to pass `term` from the child component `SearchBar` back up to the App component
- `searchImages()` produces `images` and we then need to pass this down to `ImageList`
  - to go from parent to child, use `props` (!!)

# Parent to child communication

- use `props`
- each prop has a key and a value

An example of an execption to this rule:

- you define a `handleClick` handler in the App component (parent)
- you pass in a prop with key = "onClick" and value = `handleClick`
- in the button, when a user clicks on it, we call the `onClick` function defined from props and go back into the App component (into `handleClick`)

the prop value is a function!

# Child to Parent communication

- we will define a callback function in the parent component `App`
- we can call it `handleSubmit`
- we will pass a prop of {onSubmit: handleSubmit} to `SearchBar` component
  ` return <div><SearchBar onSubmit={handleSubmit}/></div>;`
- the SearchBar component has a button that will be tied to the `onSubmit` prop
- it will pass in a `term` to the `handleSubmit` function defined in App

general idea: **"Pass an event handler down, call handler when something happens"**

- we'll have the term be sent to `handleSubmit` when enter is clicked
- within handleSubmit we will call `searchImages(term)`, and return list of images

for now we are going to use a button instead of using enter key.

- interesting: we also had to make a handler WITHIN the child component! for button's `onClick`
  - within that handler, we call the `onSubmit(term)` prop
  - this ends up executing hte `handleSubmit` handler defined in App
  - WHOA lots of nested functions lol

# Function Flow

User clicks button

```bash
`onClick` attribute on button senses this
  `handleClick` handler is called
    `onSubmit(term)` is called
      `handleSubmit(term)` in App.js is called
```
