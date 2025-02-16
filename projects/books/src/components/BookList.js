import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const value = useContext(BooksContext);
  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return (
    <div className="book-list">
      <h1>{value}</h1>
      {renderedBooks}
    </div>
  );
}

export default BookList;
