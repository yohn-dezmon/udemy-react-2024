import React, { useState, useEffect } from "react";
import { fetchItems } from "./mockApi";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastId, setLastId] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  // Fetch items for pagination
  useEffect(() => {
    const loadItems = async () => {
      if (loading) return; // Prevent overlapping calls
      setLoading(true);
      const newItems = await fetchItems(lastId);
      setItems((prevItems) => [...prevItems, ...newItems]);
      if (newItems.length > 0) {
        setLastId(newItems[newItems.length - 1].id);
      }
      setLoading(false);
    };
    loadItems();
  }, [lastId]);

  // Handle button clicks
  const handleButtonClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click Me!</button>
      <p>Button has been clicked {clickCount} times.</p>
      <h1>Paginated List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.id}: {item.value}
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      {!loading && (
        <button onClick={() => setLastId((prev) => prev + 10)}>Load More</button>
      )}
    </div>
  );
}

export default App;
