import { useState } from 'react';

export default function SimpleForm() {
    const [name, setName] = useState('');

    const handleChnage = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={handleChnage}
                    id="name" />
            </form>
            <p>Current name is: {name}</p>
        </div>
    )
}
