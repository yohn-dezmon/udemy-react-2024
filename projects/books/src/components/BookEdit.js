import { useState } from "react";
function BookEdit({ book, onUpdate }) {
  const [title, setTitle] = useState(book.title);
  const handleSubmit = (event) => {
    event.preventDefault();
    // book is a piece of state so I think this is necessary?
    const updatedBook = { ...book, title: title };
    onUpdate(updatedBook);
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="book-edit">
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleChange}></input>
        <button>Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
