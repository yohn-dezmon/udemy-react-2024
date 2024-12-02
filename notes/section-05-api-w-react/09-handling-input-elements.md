# Handling Input Elements

- e.g. the `input` HTML element
- DONT do this: `document.querySelector('input').value`
  - don't reach directly into an input element
- INSTEAD
  - do what react recommmends (form control) which is weird.
  - form control: text input, checkboxes, radio buttons, etc.

# Handling Text Inputs

1. Create a new piece of state
2. Create an event handler on the input element to watch for the `onChange` event
3. when the `onChange` event fires, get the value from the input (`event.target.value`)
4. take that value from the input and use it to update your state
5. pass your state to the input as the `value` prop
   - e.g. <input value={term} ...>

`handleChange` gets called with every key press:

- each one passes an `event` object to the handler
- to get the current value of the data in the form, use `event.target.value`
- this is overboard! (too many component re-renders) Oh wait, actually NO it is not.

create-react-app uses "hot reload" -- it tries to update data in the browser without totally refreshing the page.

# Explaining how this all works

- the `value` prop of the input component
  - force the text display of the input to be whatever value is set to
  - e.g. if `value="hi"` the input text will always be `hi`

# Flow of changes via `input` element

- user types within the input field
- browser updates the text within the input field
- browser triggers an event to state that the input was updated
- we read the value from the input and update state
  - we call `setTerm(<input value>)`
- react refreshes the component 
- we take the new state value and pass it into `value` prop/attribute of `input`
  - `term = <input value>`
  - this also overwrites the input that is displayed on the screen inside of the input field (!!) weird.


The purpose of the above?
- to take the control of the value of input into the hands of react instead of in the hands of the browser. 
  - if we need to look at the value of the input, we can check `term`
  - if we need to update the value of the input, we can call `setTerm()`
  - the component RE-RENDERS with EVERY KEY PRESS. 
  - bc we are detecting any updates to the state...

# Adv features this allows for

1. you can easily set a default value by giving the state a default value!
2. {term.length < 3 && 'term must be longer'} -- e.g. input validation!! (passwords)
3. `setTerm(event.target.value.replace(/[a-z]/, ''));` making it such that user can only input numbers!
4. 



