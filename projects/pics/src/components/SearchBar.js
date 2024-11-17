/*
for button, you have to use `onClick` prop, bc button is not a custon component.
For custom components, we can call our prop keys whatever we want! (e.g. onSubmit)
- only requirement is that the name of the parameter in the child component matches 
the name you define when calling the child component in the parent component.


What does <input /> do ?
- this allowws user to provide text input
*/

function SearchBar({ onSubmit }) {
    const handleClick = () => {
        onSubmit('cars');
    };
    return <div>
        <input />
        <button onClick={handleClick}>Click me</button>
    </div>;
}

export default SearchBar;
