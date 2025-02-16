import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BooksContext from "./context/books";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

// only components within BookContext have access to the `value` values
// Since App is a parent of a bunch of other components, those child components can access
// these values as well!
root.render(
  <BooksContext.Provider value={5}>
    <App />
  </BooksContext.Provider>
);
