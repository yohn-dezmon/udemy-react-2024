import { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    // this will return first falsey value, or last true value if no falsey value
    // ok so when isExpanded is true, then this returns {item.content}
    // otherwise, this just returns isExpanded (true)...
    // const content = ;
    return (
      <div key={item.label}>
        <div>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}

export default Accordion;
