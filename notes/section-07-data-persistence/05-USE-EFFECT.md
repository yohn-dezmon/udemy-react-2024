# useEffect

- used to run code at specific points in time!
- it can be used to run code when a component is initially rendered and optionally when it is rerendered

```js
import { useState, useEffect } from "react";

useEffect(() => {}, []);
```

- first argument is always an arrow function
- second argument controls when this code is executed in terms of rerenders
  - it can be `null`
    - called after all renders
  - it can be an empty array
    - called only after first render
  - it can be a non-empty array
    - called after first render and after any of the variables in the array gets updated

# Sample APP

codepen.io/sgrider/pen/BarEowz

Only renders on the initial load

```js
useEffect(() => {
  console.log("WOOP");
}, []);
```

Renders on all component rerenders

```js
  useEffect(() => {
    console.log("WOOP");
  },)
```

Rendering when counterOne is updated

```js
  useEffect(() => {
    console.log("WOOP");
  }, [counterOne])
```
