# Rerendering in Detail

```javascript
import { useState } from "react";

function App() {
  // default of count is set to 0
  const [count, setCount] = useState(0);

  // this is an arrow function
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of Animals: {count}</div>
    </div>
  );
}
```

- `useState(0)` is called and `count` gets set to 0 (the first time `App()` is called)
  - how does react know not to call useState the second time?
- if a user clicks the button then call `setCount(count + 1)`
- each time it is called, the surrounding component function is called, in our case `App()`
- everywhere in the `App()` where `count` is referenced, it will be the initial value that it starts out as for that run of `App()` until `onClick` is called again, then `App()` starts over with the new value for `count`
