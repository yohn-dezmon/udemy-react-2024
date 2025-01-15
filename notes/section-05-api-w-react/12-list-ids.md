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

- add the key to the top most JSX element in the list

What does "top most element" in JSX mean?

- e.g. the outermost JSX (html looking) element should have the `key` element in the output of your `.map()` function

The Key should be unique for the list that we are building.

- i.e. in a single array, you must have unique keys
- if you have two separate arrays with the same keys, that is fine.

don't use Math.random() as a key lol. (defeats the purpose)

How to choose keys?

- use the keys from outside API

If you don't have a key:

- use index of record as we're iterating through elements
- but that will lead to bugs as you continue to update the list
- alternatively, you can generate unique IDs yourself
