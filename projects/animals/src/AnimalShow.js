import './AnimalShow.css';
import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

// in JS if the key name is equal to the value name
// you can just simplify "bird: bird" to "bird"
const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
};

// { type } is object destructuring from the `props` object
function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };

    // how can I assign multiple actions to the same <div> ?
    const handleWheel = (event) => {
        // what is deltaY?
        // this represents the vertical scroll amount (pixels)
        // deltaY > 1 checks if the scroll is downward by any significant amount
        if (event.deltaY > 1) {
        setClicks(clicks - 1);
        }
    }
    
    return (
        <div className="animal-show" onClick={handleClick} onWheel={handleWheel}
        size={{ 
            height: '300px',  // Make the div scrollable
            overflow: 'auto', 
            border: '1px solid black',
            textAlign: 'center'
        }}
        >
            <img alt="animal" src={svgMap[type]} className="animal" />
            <img 
                alt="heart" 
                src={heart}
                // how can I decrease the width with scroll 
                // and increase the width with clicks
                // ans: have multiple event handlers on the same JSX component
                // and update the same variable name
                style={{ width: 10 + 10 * clicks + 'px' }} 
                className="heart"
            />
            

        </div>
    );
}

export default AnimalShow;
