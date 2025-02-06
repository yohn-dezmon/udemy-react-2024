# useEffect

- used to run code at specific points in time!
- it can be used to run code when a component is initially rendered and optionally when it is rerendered 

```js
import { useState, useEffect } from "react";

useEffect(() => {}, [])
```
- first argument is always an arrow function
- second argument controls when this code is executed in terms of rerenders 
  - it can be `null`
  - it can be an empty array
  - 