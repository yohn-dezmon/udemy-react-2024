# Converting HTML to JSX

- some things you can do in HTML will not work with JSX
  - e.g. <textarea></textarea>
  - `autofocus` attribute: allows user to start typing immediately into something without having to click.
- names/values of attributes that you provide to elements in HTML are slightly different when writing JSX

# Steps for converting HTML to JSX

1. all prop names follow `camelCase`
   - exception is `placeholder` ... idk why.
2. number attributes use curly braces
   - e.g. `maxLength={5}`
3. boolean `true` can be written with just the property name. `false` should be written with curly braces `prop={false}`
4. the 'class' attribute is written as `className`
5. in-line styles are provided as objects

^ If you mess this up it shows up in the Console.

- "Warning: Invalid DOM property `autofocus`. Did you mean `autoFocus`."

```javascript
function App() {
  return <textarea autoFocus={true} />;
}
```
