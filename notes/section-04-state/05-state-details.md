# State Details

- state: data that changes as the user interacts with our app 
- when this data changes, react will update this data on the screen automatically
- all systems that update what appears on the screen via React use state (one and only)

# Setting up state within a component

1. Define a piece of state with the `useState` function, (e.g. `const [count, setCount] = useState(0)`)
2. Give a default value to the `useState` function (e.g. `useState(0)`)
3. Use the state someway within our JSX 
4. When user does something, update the state. When a piece of state gets updated, react will automatically rerender 
