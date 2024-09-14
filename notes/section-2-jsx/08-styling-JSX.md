# Applying Styling in JSX

- in HTML you provide numbers as `maxLength="5"`
- in JSX you provide them like: `maxLength={5}`

- booleans (true = omitted)

```javascript
function App() {
  return <input spellCheck />;
}
```

- for the `style` prop, we have to pass in objects
- in HTML you pass in a string of key value pairs
  - `style="text-decoration: 'none'; padding: '5px';"`
  - rules are separated by dashes
  - key value pairs are separated by `;`

```jsx
<div style={{ textDecoration: "none", padding: "5px" }} />
```
