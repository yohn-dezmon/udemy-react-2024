```js
function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [...books, { id: 1, title }];
    setBooks(updatedBooks);
  };

  return (
    <div>
      {books.length}
      <BookCreate onCreate={createBook} />
    </div>
  );
}
```
