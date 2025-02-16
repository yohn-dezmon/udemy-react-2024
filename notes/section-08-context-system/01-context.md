# Context System

Previously:

- we created a bunch of event handlers in App that had to be communicated down into the children classes
- **Context** is an alternative to Props (!!)

- you can put shared functionality + data (e.g. event handlers, or state) into Context
- state is specific to a component

**Context** is NOT a replacement for props though, you will still end up using props as well just certain thins will be added to context.
**Context** is not a replacement for **Redux**...

Context:

- a communication channel
- it doesn't care what data you are sharing or how it is organized
- setting it up is a bit of a pain

Redux:

- Redux is a centralized state store
- Redux is all about organization of data

Using Context:

1. Create the context

- create a new file

```js
import { createContext } from "react";

// context object
const BookContext = createContext();
// two properties within this obj
// 1. Provider - component to specify what data we want to share
// <BooksContext.Provider />
// 2. Consumer - component used to get access to data (not often used)
```

2. Specify the data that will be shared

- use the `value` prop of `BookContext.Provider` component
- `value` prop is special
- `value={5}` the thing in value can be anything
- to specify which components are going to receive these values, we have to list out the components inside the provider

```js
<BookContext.Provider value={5}>
  <MyComponent />
</BookContext.Provider>
```

- so you usually set up Provider above App such that it can render the rest of the application

3. Consume the data in a component

```js
import { useContext } from "react";
import BookContext from "./book";

function MyComponent() {
  // num is whatever we passed into the value prop
  const num = useContext(BookContext);
  return <div>{num}</div>;
}
```

# Parent to child sharing

- as long as you put a parent within the BookContext.Provider block, all children components will have access to the context
