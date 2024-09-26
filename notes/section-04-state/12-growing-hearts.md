- point img src to the heart icon svg file
- set style on img component
- style has to be an object

  - set width: 10 + 10 \* clicks + 'px'

- set an onClick action on the div containing both the animal image and the heart image
- set onClick to be handleClick
- handleClick is an arrow function assigned to a const
- it increments clicks by 1 using setClicks
- clicks and setClicks are defined from useState with a default value of 0

```javascript
function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div onClick={handleClick}>
      <img alt="animal" src={svgMap[type]} />
      <img alt="heart" src={heart} style={{ width: 10 + 10 * clicks + "px" }} />
    </div>
  );
}
```
