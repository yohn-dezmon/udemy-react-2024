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
  const handleUpdate = (id, title) => {
    setShowEdit(!showEdit);
    onEdit(id, title);
  };
  // conditional logic here...
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = (
      <BookEdit showEdit={showEdit} book={book} onEdit={handleUpdate} />
    );
  }
  return (
    <div className="book-show">
      {content}
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
