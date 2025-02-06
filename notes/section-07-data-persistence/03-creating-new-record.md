within the createBook handler in App.js

`npm install axios`

```js
const createBook = async (title) {
    const response = await axios.post('http://localhost:3001/books', { title });
    console.log(response.data);
}
```

