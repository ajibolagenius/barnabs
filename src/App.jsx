import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import Button from './components/Button'
import Card from './components/Card'
import Counter from './components/Counter'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>


            <hr />
            <Greeting />
            <hr />
            <div style={{ display: 'flex', gap: '10px', padding: '20px' }}>
                <Button text="Update" color="blue" />
                <Button text="Submit" color="yellowgreen" />
                <Button text="Delete" color="crimson" />
            </div>
            <hr />
            <div style={{ display: 'flex', gap: '10px', padding: '20px' }}>
                <Card title="User Profile">
                    <img src="https://placehold.co/200/EEE/31343C?font=playfair-display&text=Barnabas%20Profile" alt="User" />

                    <p>Name: Barnabas</p>
                    <p>Role: Developer</p>
                    <Button text="Edit Profile" color="#333" />
                </Card>

                <Card title="Warning">
                    <p>Are you sure you want to delete this?</p>
                    <Button text="Yes, Delete" color="crimson" />
                </Card>
            </div>
            <hr />
            <Counter/>



            <br /><br /><br /><br /><br />
        </>
    )
}

export default App
