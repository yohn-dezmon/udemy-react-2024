# Event Handler Variations

- Why do we use a function reference instead of calling the function?
    - bc we only want to call the function when the event occurs
- if you want you can define a function directly inside the prop like:
```javascript
onClick={function() { return 'hi' }}
```

- you can also define an arrow function directly inside the prop (I've seen this in NodeJS code!)
```javascript
onClick={() => { return 'hi' }}
```

- you can also remove the braces for the arrow function
- people often do this when the callback is small.
```javascript
onClick={() => return 'hi' }
```

```javascript
function App() {
    return (
        <div>
            <button onClick={() => console.log('Hello there!')}>Click Me!</button>          
        </div>
    );
}
```
