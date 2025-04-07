# Conditional Rendering

- React doesn't print out booleans, nulls or undefined (!!)
- `const content = isExpanded && <div>{item.content}</div>;`
  - this will only return item.content if isExpanded is true!

# JS Boolean Expressions

```js
100 || 200;
// returns: 100 because 100 comes first and it is non-null? yep
// you get back the first value that is truthy

"hi" || "there";
// returns: 'hi'

false || "there";
// returns 'there'

0 || true;
// returns true

50 || null;
// returns 50

100 || 200;
// returns 100
```

```js
false && true;
// returns: false
// && returns teh first falsey value (if one exists) or the last truthy value

"hi" && "there";
// returns: 'there'

false && "there";
// returns false

0 && true;
// returns 0

50 && null;
// returns null

100 && 200;
// returns 200
```
