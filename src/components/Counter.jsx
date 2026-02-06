import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        // Best practice: use a functional update for logic based on previous state
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div className="counter-box">
            <h3>Count: {count}</h3>
            <button onClick={increment}>Add +1</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}
