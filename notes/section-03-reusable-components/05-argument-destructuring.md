# Using Argument Destructuring

- this is a JS feature, not something unique to React
-

Instead of:

```javascript
const title = props.title;
const handle = props.handle;
```

You can use destructuring:

```javascript
const { title, handle } = props;
```

Even simpler:

```javascript
function ProfileCard({ title, handle }) {}
```
