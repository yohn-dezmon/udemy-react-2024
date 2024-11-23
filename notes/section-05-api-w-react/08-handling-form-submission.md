# Handling form submission

Detecting user typing in, and then pressing enter:

- wrap `input` element with `form` element
- pressing enter will automaticaly trigger a `submit` event!
- this is HTML functionality
- form allows you to pass data if user (a) presses enter (b) clicks button
  as long as they are within the form.
  - This is the main reason why it's more convenient to use a form, otherwise you need to set up two event handlers.
- form, instead of `onClick` for button, has a `onSubmit` attribute
  - you can pass in a handler function with `{}` (jsx) to this
  - downside: automatic behavior
  - (1) triggers submit event on the form
  - (2) browser will collect inputs from form and make a network request with them
    - will make a query str of `field1=bleh&field2=blah`
    - make erquest to your current URL e.g. `myapp.com`
    - full request: `myapp.com?field1=bleh&field2=blah`

We want to prevent (2)

**for plain event handlers (e.g. from HTML elements) we will always receive an `event` object**

- this can be used as a parameter in the event handler
- it's optional to use or not

We can disable `event.preventDefault()`; to prevent (2)
