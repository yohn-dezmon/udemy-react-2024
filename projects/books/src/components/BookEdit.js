import { useState } from "react";
function BookEdit({ book, onSubmit }) {
  // don't default this to book.title ... idk why
  const [title, setTitle] = useState(book.title);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange} className="input"></input>
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
