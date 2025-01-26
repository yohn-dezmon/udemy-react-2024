import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const removeBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    // Math.random() returns decimal between 0 and 1
    // Math.random() * 9999 --> random number between 0 and 9999
    // wrap in Math.round()
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={removeBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
