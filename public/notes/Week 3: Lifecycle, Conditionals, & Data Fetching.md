# Week 3: Lifecycle, Conditionals, & Data Fetching

Welcome to Week 3! Now that you can structure components and make them interactive, we are bridging the gap to real-world applications. This week focuses on logic: showing or hiding elements, handling dynamic lists, and synchronizing your app with external data through the component lifecycle.

---

## 🔀 Module 5: Conditional Rendering & Lists

**Objective:** Learn to control *what* gets rendered based on logic and *how* to render multiple items efficiently.

### 1. Conditional Rendering

React uses standard JavaScript logic to control rendering. There are three primary patterns:

* **Early Returns (`if` statement):** Best for checking if a component should render at all or needs an entirely different view, such as a loading screen.
* **Ternary Operator (`? :`):** Ideal for switching between two different elements inside JSX.
* **Logical AND (`&&`):** Best for rendering an element **only if a condition is true**, and nothing otherwise.

### 2. Rendering Lists

To transform arrays of data into JSX elements, we use the `.map()` method.

> **The `key` Prop:** React requires a unique string attribute called a `key` for every item in a list. This helps React track which items have changed, been added, or removed. You should use unique IDs from your data (like database IDs) rather than array indices.

---

## ⏳ Module 6: The `useEffect` Hook (Side Effects)

**Objective:** Understand how to run code after React renders and synchronize components with external systems.

### 1. Pure Rendering vs. Side Effects

* **Pure Rendering:** Components should ideally be pure logic during the render phase ().
* **Side Effects:** Any operation affecting something outside the function scope—such as fetching data, setting timers, or manually changing the DOM—must be handled by `useEffect`.

### 2. The Dependency Array (`[]`)

The second argument to `useEffect` is the **Dependency Array**, which is the most critical concept to master for controlling when your code runs:

| Dependency Array | Behavior |
| --- | --- |
| **No Array** | Runs after **every** render. |
| **Empty Array `[]**` | Runs **only once** on "mount" (initial load). |
| **`[variable]`** | Runs on mount **and** whenever that specific variable changes. |

---

## 🌐 Module 7: Data Fetching with `useEffect`

**Objective:** Implement the "Standard Fetch Pattern" to display data from an API.

### The Three States of Fetching

A professional UI must handle three distinct states during an asynchronous request:

1. **Loading:** The request is currently in progress.
2. **Success:** The request finished successfully and data is available.
3. **Error:** The request failed.

### Practical Implementation

When using `async/await` inside `useEffect`, you must define the async function *inside* the effect and then call it, as the effect callback itself cannot be `async`.

```jsx
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) throw new Error('Failed to fetch');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []); // Empty array ensures this only runs once

```

---

## 📝 Week 3 Take-Home Assignment: "Blog Explorer"

**Objective:** Build a blog post viewer that fetches real-world data, handles loading states, and renders lists dynamically.

1. **Data Source:** Use the JSONPlaceholder API (`https://jsonplaceholder.typicode.com/posts`).
2. **State Management:** Track the array of posts, a `loading` boolean, and an `error` message.
3. **UI Logic:**
* Display "Loading Posts..." while the data is fetching.
* Display the post `title` and `body` using `.map()`.
* **Bonus:** Add a "Refresh" button that re-triggers the fetch logic.



---