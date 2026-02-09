import { useState } from "react";


export default function Counter() {
    // Initialize state to 0
    const [count, setCount] = useState(0);

    // Event Handler Function
    const handleIncrement = (e) => {
        setCount(count + 2)
        console.log(`Target: ` + e.target.value);
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
            <h3>Current Count: {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}
