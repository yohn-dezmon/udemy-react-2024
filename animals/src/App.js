import AnimalShow from './AnimalShow';

function App() {
    // this is an arrow function
    const handleClick = () => {
        console.log('Button was clicked');
    };

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
        </div>
    );
}

export default App;