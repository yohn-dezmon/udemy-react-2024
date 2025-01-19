import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("Need to add book with: ", title);
    const book = {id: 1, title: title};
    // how to append to a state list in react?
    setBooks([...books, book]);
  }

  return (<div>
  <BookCreate />
  </div>);
}

export default App;
