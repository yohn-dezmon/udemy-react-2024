# className
- when you use tailwind you use the className property to set your styles
- this gets passed down to children props
- so if a user wants to set className on their Button instance to pass it down to button, it won't work
- 

# Solution
- pass in `rest.className` into the tailwind className
