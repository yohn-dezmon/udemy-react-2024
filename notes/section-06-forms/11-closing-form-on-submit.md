# Closing the form on submit

there are two ways to do this, one which is naive, the other which is good.  

when I solved it:
- I defined this logic in BookShow
```js
const handleUpdate = (id, title) => {
    setShowEdit(!showEdit);
    onEdit(id, title);
  };
```


His first way:
- he creates a helper function in BookShow, but he keeps it separate from onEdit
- he currently has no logic for onEdit in BookShow
- in his helper function he calls the helper when a submissions i received from BookEdit    


^ Why this is bad:




# Better solution 
yay! This was the solution I came up with on my own.

