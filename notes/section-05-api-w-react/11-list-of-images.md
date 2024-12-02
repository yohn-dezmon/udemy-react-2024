# Getting list of images down into ImageList components

- we need to communicate the array of images down into ImageList form App.js
- we need to combine the state system and props system to do this

State System reminders:

-

"after doing a search, we want to update content on the screen with a new list of images"

- if we're updating content on the screen, use state!

# Confusion with this:

- you initialize useState to an empty array for [images, setImages]
- in first render, you return some JSX from App.js, and you send `[]` to ImageList via images
- when user hits enter, handleSubmit gets called
- we hit the API and get the result which we then use to call `setImages(result)`
- in second render of App.js, images is now an array of objects
- once again the JSX is returned but this time the images prop accepts `images` which is actually an array of objects
  - when we return the JSX, we not only render the `App` component, but also the `SearchBar` and `ImageList` components!

# Summarizing confusing parts:

1. when you update state, the component and all of its children are rerendered (!!)
2. from the perspective of the `App` component, `images` is a state object
3. from the perspective of the `ImageList` component, `images` is a prop within the props system
