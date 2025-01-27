import { useState } from "react";
function BookEdit({ book, onUpdate }) {
  // don't default this to book.title ... idk why
  const [title, setTitle] = useState(book.title);
  const handleSubmit = (event) => {
    event.preventDefault();
    // book is a piece of state so I think this is necessary?
    const updatedBook = { ...book, title: title };
    onUpdate(updatedBook);
    // we need to go back to displaying the BookShow though...
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
