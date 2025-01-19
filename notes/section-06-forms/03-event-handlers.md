# Event handler 

- user submits a book title, this creates a new book object { id: 123, title: "book 1" }
- this gets passed back to App via an event handler prop 
- this gets set to `[{}]` in `book` in App 
- this gets passed down to its child components, so you can then see the new book on the screen 


# We will define several different event handlers! 

- these are just functions 
- they will update the `books` state in different ways! 


# createBook

- we'll define this as an event handler function within App
- we'll pass it as a prop into BookCreate
- we'll then call createBook when a user submits a value to the form, by linking it to `onSubmit`
- inside createBook, we will update the `books` list by appending the new object to it 

