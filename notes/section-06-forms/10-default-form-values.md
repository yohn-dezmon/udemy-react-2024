# Default form values

# How I solved it

- create an updateBooks fn in App where we accept an updated book and add it into books with filter, and then spread operator to add in the updated book
- pass that fn to BookList, BookShow and BookEdit
- in BookShow make sure you have a handler to set the showEdit state to false before calling onUpdate
- in the BookEdit component, create a piece of state for the new title, update it with onChange and set it with value on the input prop
- you don't need a div to surround form
- for onSubmit, in your handler, that's where you update the book and then call onUpdate with the updated book obj

# Updates after watching solution

- he called the function onEdit which is more consistent with BookEdit's name
- he points out that in large applications, passing a function through a bunch of components that don't actually use it leaves room for confusion 
- 