import AnimalShow from './AnimalShow';
import { useState } from 'react';

function App() {
    // default of count is set to 0
    const [count, setCount] = useState(0);

    // this is an arrow function
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>
                Number of Animals: {count}
            </div>
        </div>
    );
}

export default App;