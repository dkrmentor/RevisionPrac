import React, { useState } from 'react';
import './Counter.css'; // Import your custom CSS file

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <p className="counter-title">Welcome to the Modern Counter</p>
      <h2 className="count-display">{count}</h2>
      <div className="button-container">
        <button className="counter-button increment-button" onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button className="counter-button decrement-button" onClick={() => setCount(count - 1)}>
          Decrease
        </button>
        <button className="counter-button reset-button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
