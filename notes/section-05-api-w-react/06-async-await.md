# Async Await in JS

- requests take time to go across the network

```js
const fetchData = async () => {
    const response = await axios.get( ... );

    console.log(response);
}
```

- if you were to call fetchData from another file, you don't need to preface it with `await`.
