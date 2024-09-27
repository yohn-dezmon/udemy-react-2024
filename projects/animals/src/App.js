// for CSS we don't want to read it into a variable
// we want to load the CSS directly into the browser
import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';
// helper function 
function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
    const [animals, setAnimals] = useState([]);

    // this is an arrow function
    const handleClick = () => {
        // JS syntax for updating a list
        // ... creates a brand new array
        // animals.push(getRandomAnimal()) is an alternative
        // but the above MODIFIES a piece of state
        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">
                {renderedAnimals}
            </div>
        </div>
    );
}

export default App;
