# State Location / Storage 

- represent each book as an object 
- we'll store all of the books/objects into a single array 
- when a user goes to change a title of the book... we want to update the content on the screen (state update)


# State update stuff

-  if state is updated, rerender the component, and all children components! 
  
Where to define state then?
-  find all the components that need to use this state 
-  define the state in the lowest common parent 

`books` will be used for all of the components, so you should define it in `App`

# states and lists 

- default the state to `[]` for state lists 


