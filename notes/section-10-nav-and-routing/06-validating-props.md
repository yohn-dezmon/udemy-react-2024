# Validating props with PropTypes

- what happens if multiple purposes are true?
  - `prop-types` javascript library
  - props have appropriate types
  - optional
  - Typescript does the same thing (but would it also ensure multiple bools weren't specified?)
  -

```js
function (Card({title, content, showImage} )) {
    ...
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    showImage: PropTypes.bool
}
```

You can specify a custom validator (how to do this with typescript?)
- the validator is a function... which returns an Error if validation fails
- `npm install prop-types`

