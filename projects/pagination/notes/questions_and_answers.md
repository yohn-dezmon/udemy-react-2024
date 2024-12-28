# Why do we call `loadItems()` without await even though it is an async function?

- loadItems is called and created within `useEffect`
- useEffect is not designed to return a Promise, so you cannot make `useEffect` an async function
- by calling it like a regular function, useEffect is able to work properly, while any async logic is handled within the async function itself

# how is useEffect working here?

- useEffect gets called when the App component is initially rendered (by definition)
- since we have `[lastId]` as the second argument, each time `lastId` is updated `useEffect` will be called again
- `lastId` gets updated each time we get a response from the mock api function
  - `setLastId()`
  - this only occurs if the length of the response from the API is > 0

# how is the `loading` piece of state used?

- it is defaulted to false
- if before we even make the call, it is set to true, we return early from the loadItems() fn because this means another call is still in place
- right before we make the API call, we set it to true
- we set it back to false at the end of the logic in loadItems() with `setLoading()`

- at a higher level, this allows data to load consecutively if it is ordered data (!!)
- also, if you had a button to trigger the loading of the data, this would prevent duplicate data from being loaded each time the user clicked the button

# how are items and setItems being used?
