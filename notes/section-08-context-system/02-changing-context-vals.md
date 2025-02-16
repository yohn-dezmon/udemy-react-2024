# Sharing multiple things into Context.Provider

- we need to share state, as well as a handler to update the state into Context

```js
<BooksContext.Provider value={{ count, incrementCount }} />
```

- to achieve this though, we have to wrap the BooksContext provider in another component called "Provider" lol

Provider component:

- can be called something else but by convention is called Provider
- you create this component in the file where you created BookContext() obj
- Provider will have a `children` prop
- we create an object that we then pass into `value={...}`
- 
