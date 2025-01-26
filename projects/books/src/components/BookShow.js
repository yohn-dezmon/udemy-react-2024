function BookShow({ book, onDelete }) {
  const handleClick = () => {
    onDelete(book.id);
  };
  return (
    <div className="book-show">
      <div className="actions">
        <button className="delete" onClick={handleClick}>
          X
        </button>
      </div>
      {book.title}
    </div>
  );
}

export default BookShow;
