/*
for button, you have to use `onClick` prop, bc button is not a custon component.
For custom components, we can call our prop keys whatever we want! (e.g. onSubmit)
- only requirement is that the name of the parameter in the child component matches 
the name you define when calling the child component in the parent component.


What does <input /> do ?
- this allowws user to provide text input
*/
import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    // preventing form submission
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
