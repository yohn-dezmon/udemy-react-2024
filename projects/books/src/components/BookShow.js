import BookEdit from "./BookEdit";
import { useState } from "react";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const handlDeleteClick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, title) => {
    onEdit(id, title);
    setShowEdit(!showEdit);
  };
  // conditional logic here...
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = (
      <BookEdit showEdit={showEdit} book={book} onSubmit={handleSubmit} />
    );
  }
  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/200/300`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          EDIT
        </button>
        <button className="delete" onClick={handlDeleteClick}>
          X
        </button>
      </div>
    </div>
  );
}

export default BookShow;
