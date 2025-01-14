# List Updates

- each child in a list, should have a unique `key` prop (!!)
- each image has properties... e.g. `alt_description`

# Swapping two elements in the list

- this is a **state change**
- results in updating HTML...

You could... delete HTML, then recreate it.  
Now they have the correct order.
This works, but is expensive.

Apply a key **prop** to each ImageShow component!

- this allows you to assign the order based on index to specific keys
- you can change the order, then see where the diffs are (based off of key), then only update the HTML of elements that have chanegd!

Flow:

- you apply a `key` prop to each element during mapping step
- React: after re-rendering, react compares the key son each ImageShow to the keys from the previous render
- React: it applies minimal set of changes to existing DOM elements

# NOTES ON KEYS
