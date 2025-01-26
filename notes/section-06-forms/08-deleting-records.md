# Deleting Books

- use an `x` icon/button to delete the record from the list

# My strategy

- add a handler to a button within BookShow
- add a handler that is passed down as a prop from BookList to BookShow
- add a handler that is at the App level since that's where the `books` state is defined
- since this is an array, update it with `array.filter(() = > {})`
- update state with `setBooks()`

This worked!

# Solution from lecture

- I think he somehow uses the same fn name for all of the handlers?
- actually nvm BUT you don't need to define handler in BookList, just pass the function down directly via props!
