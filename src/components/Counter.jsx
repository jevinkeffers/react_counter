import React, { useState } from "react";

function Counter() {
    // Set the initial count state to zero, 0
    const [count, setCount] = useState(0);

    // Create handleIncrement event handler
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    //Create handleDecrement event handler
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };
    return (
        <div>
            <h2>Whoa it's Counter</h2>
        <div>
            <button onClick={handleDecrement}>-</button>
            <h4>Count is {count}</h4>
            <button onClick={handleIncrement}>+</button>
        </div>
            <p><button onClick={() => setCount(0)}>Reset</button></p> 
        </div>
    );
}

export default Counter;