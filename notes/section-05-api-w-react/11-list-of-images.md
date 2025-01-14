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

# Buidling a list of images

Mapping function:

- passing each image into a ImageShow component

# REVIEW OF PREVIOUS SLIDES

- each time a user presses enter we'll make an API request to unsplash api
- this returns a list of images which will be processed by ImageList
- each image in this ImageList will be mapped to an ImageShow class
- `axios` is used to make HTTP requests in JS
  - `axios.get()` is an async func (returns a promise)

```js
const fetchData = async () => {
  const response = await axios.get( ... );
  console.log(response);
}
```

# First Render

- `images` state is defaulted to `[]`
- pass `images` to ImageList in the JSX, which is currently just `[]`
- then when you call handleSubmit, it calls `setImages()` and this reloads `App` component

# Second render

- then you call ImageList again with updated `images`, and ImageList is rendered to the screen with the images
- children components get re-rendered whenver parent gets rendered

# BUILDING A LIST OF IMAGES

- every image object from the API has an `id` property
- we're going to map over the array
-

```js
(image) => {
  return <ImageShow image={image} />;
};
```

- each child in a list, should have a unique `key` prop (!!)
