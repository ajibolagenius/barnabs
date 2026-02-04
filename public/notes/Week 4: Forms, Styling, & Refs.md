# Week 4: Forms, Styling, & Refs

Welcome to Week 4! We are moving from viewing data to **collecting** it. This week is crucial because almost every useful application requires user input—whether it's logging in, searching, or creating content.

---

## 📝 Module 8: Advanced Forms

**Objective:** Master the "Controlled Component" pattern to handle single and multiple input fields.

### 1. The "Controlled Component" Pattern

In standard HTML, an `<input>` keeps track of its own data. In React, we want our **State** to be the "Single Source of Truth".

* **The Loop:**
1. **State → Input:** The input's `value` attribute is set to the React state.
2. **Input → State:** When the user types (`onChange`), we update the React state using a setter function.



### 2. Handling Multiple Inputs (The Professional Way)

Managing 10 separate `useState` variables for a large form is inefficient. Instead, we use a **single object** for state and a generic handler function.

* **The `name` Attribute:** We give each input a `name` attribute that matches the property key in our state object.
* **Computed Property Names:** We use square brackets `[e.target.name]` to dynamically update the correct key.

**Example: Multi-Input Form**

```jsx
const [formData, setFormData] = useState({ username: "", email: "" });

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value // Updates ONLY the field that changed
  }));
};

```

---

## 🎨 Module 9: Styling React Components

**Objective:** Learn how to scope your CSS so it doesn't accidentally interfere with other parts of your app.

### 1. The Problem with Global CSS

Global CSS can lead to class name clashes as your app grows. For example, a `.button` style in one file might accidentally color every button in the entire application.

### 2. The Solution: CSS Modules

Vite supports CSS Modules out of the box. A CSS Module is a CSS file where all class names are scoped locally by default.

* **Naming Convention:** `ComponentName.module.css`.
* **Import Syntax:** `import styles from './ComponentName.module.css'`.
* **Usage:** React/Vite generates unique class names (e.g., `_btn_x9z2a`) to ensure they never clash.

---

## 🔗 Module 10: The `useRef` Hook

**Objective:** Learn how to access DOM elements directly and store values that persist without causing re-renders.

### 1. `useState` vs. `useRef`

| Feature | `useState` | `useRef` |
| --- | --- | --- |
| **Main Purpose** | Storing data that affects the UI. | Accessing DOM / Storing "behind the scenes" data. |
| **Re-render?** | **Yes.** Changing state triggers a re-render. | **No.** Changing a ref does not trigger a re-render. |
| **Access** | `stateVariable`. | `refVariable.current`. |

### 2. Use Case: Accessing the DOM (Focus)

Sometimes you need to do things React can't do easily, such as focusing an input when a page loads or after a reset.

```jsx
const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus(); // Focuses the input after mount
}, []);

return <input ref={inputRef} />;

```

---

## 🧾 Week 4 Take-Home Assignment: "Tip & Split Calculator"

**Objective:** Build a fully functional utility app using Controlled Forms, CSS Modules, and Refs for a professional user experience.

1. **Form Requirements:**
* Input for **Bill Amount** (number).
* Dropdown for **Tip Percentage** (10%, 15%, 20%).
* Input for **Number of People**.


2. **Calculations:** Automatically update the **Total Per Person** as the user types.
3. **UX Improvement:** Use `useRef` to automatically focus the "Bill Amount" input when the app loads or is reset.
4. **Styling:** Use **CSS Modules** to create a distinct look for the input and result sections.

---