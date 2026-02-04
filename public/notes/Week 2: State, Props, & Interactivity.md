# Week 2: State, Props, & Interactivity

Welcome to Week 2! While Week 1 focused on static structures, this week is about bringing your applications to life. We will master how components communicate and how they "remember" information to create truly dynamic user experiences.

---

## 📦 Module 3: Props (The Component's DNA)

**Objective:** Learn to make components reusable by passing data down the component tree.

### 1. What are Props?

"Props" is short for **properties**. In the same way that a function takes arguments to change its output, a React component takes props to change what it renders.

* **Unidirectional Flow:** Data in React flows in one direction: from Parent to Child.
* **Immutability:** Props are **read-only**. A child component cannot modify the props it receives; it can only display them or use them to calculate other values.

### 2. Destructuring Props

While React passes a single `props` object to your function, modern developers use **JavaScript destructuring** to pull out exactly what they need immediately.

**Example: A Dynamic Profile Component**

```jsx
// Receiving props via destructuring
export default function UserProfile({ name, role, color }) {
  return (
    <div style={{ borderLeft: `5px solid ${color}`, padding: '10px' }}>
      <h2>{name}</h2>
      <p>Occupation: {role}</p>
    </div>
  );
}

```

### 3. The `children` Prop

Sometimes you want to pass entire JSX elements into a component, not just strings or numbers. This is done using the special `children` prop, which captures everything placed *between* the opening and closing tags of a component.

---

## ⚡ Module 4: State & Event Handling

**Objective:** Understand how to make components interactive using the `useState` hook.

### 1. State vs. Regular Variables

A standard JavaScript variable (e.g., `let count = 0`) can hold data, but changing it does not tell React to update the screen. **State** is a special category of data that, when updated, triggers React to **re-render** the component and show the new values.

### 2. The `useState` Hook

To use state in a functional component, we use the `useState` hook.

* **Syntax:** `const [state, setState] = useState(initialValue);`.
* **The Setter:** You must **never** modify state directly (e.g., `count = 5`). You must always use the setter function (`setCount(5)`) to ensure React knows a change happened.

### 3. Handling Events

React events use **camelCase** (e.g., `onClick`, `onChange`). You should pass the **function definition** to the event handler, rather than calling it immediately.

**Correct Usage:**

```jsx
const handleClick = () => console.log("Clicked!");

// Pass the function name, don't add ()
<button onClick={handleClick}>Click Me</button> 

```

---

## 🛠️ Practical Implementation: The Counter Component

This example demonstrates how state and events work together to update the UI in real-time.

```jsx
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

```

---

## 📝 Week 2 Take-Home Assignment: "Interactive To-Do List"

**Objective:** Build a To-Do application that manages a list of tasks and handles user input.

1. **Component Structure:**
* `TodoList.jsx`: The parent component holding the state.
* `TodoItem.jsx`: A child component that receives a task's text as a prop.


2. **State Requirements:**
* An array of strings (the tasks).
* A string to track the current value of the input field.


3. **Core Logic:**
* When the user types, update the input state.
* When the "Add" button is clicked, add the input value to the task array and clear the input.


4. **Bonus Challenge:**
* Add a "Delete" button to each `TodoItem` that removes it from the list.


