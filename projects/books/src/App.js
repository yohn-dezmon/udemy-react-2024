import { useState, useEffect } from "react";
import axios from 'axios';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data);
  };

  useEffect(() => { fetchBooks(); }, []);

  const removeBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title
    });
    console.log(response);
    const updatedBooks = [
      ...books,
      response.data,
    ];
    setBooks(updatedBooks);
    console.log(updatedBooks);
  };

  const editBookById = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, title };
      }
      return book
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList
        books={books}
        onDelete={removeBookById}
        onEdit={editBookById}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
