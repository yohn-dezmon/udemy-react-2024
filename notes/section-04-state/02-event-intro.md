# Event System

- e.g. detect a user clicking a button 
- used to detect user usage in general

```javascript
    // this is an arrow function
    const handleClick = () => {
        console.log('Button was clicked');
    };

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
        </div>
    );
```

# State System

- update content on screen after an event


# Events (in detail)

1. decide what kind of event you want to watch for
2. create a function (an **event handler**/**callback function**)
3. name it with `handle<event-name>` , e.g. `handleClick`
4. pass the function as a prop to a plain element
5. it has to be passed in with a valid event attribute (e.g. `onClick`, `onMouseOver`, etc.)
6. make sure you call a reference to the function, don't call it (i.e. `functionName` not `functionName()`)


# Event Types

- SyntheticEvent or Supported Events in the react documentation will show you all the different kinds of events you can wait on 
- most common events are `onClick` and `onChange`
- `onChange` -- a user types in a text input
- 