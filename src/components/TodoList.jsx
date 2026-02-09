import { useState } from 'react'
import TodoItem from './TodoItem'

export default function TodoList() {
    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState(['Learn React', 'Build a Project'])

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleAddTodo = () => {
        setTodos([...todos, inputValue])
        setInputValue('')
    }

    return (
        <div>
            <input
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter a new task"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem key={index} taskName={todo} />
                ))}
            </ul>
        </div>
    )
}
