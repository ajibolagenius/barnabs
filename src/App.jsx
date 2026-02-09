import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import Card from './components/Card'
import Counter from './components/Counter'
import Button from './components/Button'
import TodoList from './components/TodoList'

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
                <Button text="Click Me" color="dodgerblue" fontStyle="Times New Roman" />
                <Button text="Delete Me" color="crimson" fontStyle="Arial" />
                <Button text="Restore Me" color="yellowgreen" fontStyle="monospace" />
            </div>
            <hr />
            <div style={{ display: 'flex', gap: '10px', padding: '20px' }}>
                <Card title="User Profile">
                    <img src="https://placehold.co/200" />
                    <p>Name: Alex</p>
                    <p>Role: Developer</p>
                    <Button text="Edit Profile" color="dodgerblue" />
                </Card>
                <Card title="Warning">
                    <p>Are you sure you want to delete this?</p>
                    <Button text="Yes, Delete" color="red" />
                </Card>
            </div>
            <hr />
            <Counter />
            <hr />
            <TodoList />



            <br /><br /><br /><br /><br />
        </>
    )
}

export default App
