# JS Map trick

```javascript
// in JS if the key name is equal to the value name
// you can just simplify "bird: bird" to "bird"
const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};
```

here we are mapping keys (e.g. 'bird') to a path to an SVG photo.
