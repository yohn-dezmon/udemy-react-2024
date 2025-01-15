# styling

- make search bar styled better
- make images line up nicely

SearchBar.css

- this assumes you'll have a class name of `search-bar` in the root element in a given component

```css
.search-bar {
  border: 1 px solid lightgray;
  border-radius: 5px;
  padding: 10px;
}
```

What does this do?

```css
.search-bar form {
  display: flex;
  flex-direction: column;
}
```

what is display: flex?

- it makes the `form` a `flex container`...
- enables `flexbox` properties
- `flex-direction: column` -- arranges the child elements of the form vertically (!)

This should really be its own CSS file for ImageShow but we just have it in ImageList.css:

```css
img {
  width: 100%;
  margin-bottom: 10px;
}
```
