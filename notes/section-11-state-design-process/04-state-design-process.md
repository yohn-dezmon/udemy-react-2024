# State Design Process

Design process takes a good amount of time

- expanded version makes it moer clear
- we're goin to design state for the Accordion component
- process works really well when designing more complex components

# PROCESS

1. List out what a user will do and changes they will see while using your app
2. Categorize each step as 'state' or 'event handler'
3. Group common steps, remove duplicates, rewrite descriptions
4. Look at mockup, remove or simplify parts that aren't changing
5. Replace remaining elements with text descriptions
6. Repeat 4 and 5 with different variation
7. Imagine you have to write a function that returns the text of steps 5 and 8. In addition to your component props, what other arguments would you need.
8. Decide where each event handler + state will be defined (!!)

Use mockups!

- each accordion section can be collapsed or expanded
- each accordion section has a title, and body text
- only one section can be expanded at a time, so we can use the index to know which one to display as expanded (!)

# Where to define the state?

- does any other component besides the current component need to know about this state?
  - yes: define in parent
  - no: define in current component

React is not good at communicating between sibling components.
**Event handlers** should be defined in the same component as the state it modifies!
