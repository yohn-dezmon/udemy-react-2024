Look at common traits amongst the buttons.

- outline (t/f)
- rounded (t/f)
- purpose/variation: (Plain, Primary, Secondary, Success, Warning, Danger)
  - make one prop for each
  - each is t/f
  - but what happens if multiple purposes are true?

# Reminder: boolean props

- <Button primary={true}>asdf</Button> is the same as <Button primary>asdf</Button>
- <Button primary={true}>asdf</Button> is the same as <Button>asdf</Button>

# Issue

- what happens if multiple purposes are true?
