# Week 6: Advanced React & Final Project

Welcome to the finish line! You’ve built a solid foundation in React. This final week is about leveling up from "Junior" to "Intermediate" by mastering logic reuse, optimization, and complex state management.

---

## 🎣 Module 13: Creating Custom Hooks

**Objective:** Learn to extract component logic into reusable functions.

### 1. The "DRY" Principle (Don't Repeat Yourself)

While components allow you to reuse UI, **Custom Hooks** allow you to reuse **logic**. If you find yourself writing the same `useEffect` or `useState` patterns (like fetching data) in multiple components, it’s time for a custom hook.

### 2. Rules of Custom Hooks

* **Must start with "use"**: This naming convention (e.g., `useFetch`, `useAuth`) tells React that the function follows Hook rules.
* **Can call other Hooks**: They are standard JavaScript functions that can internally utilize `useState`, `useEffect`, and other built-in hooks.

**Example: `useFetch` Logic**
Instead of rewriting fetch logic in every component, you can create a single `useFetch(url)` hook that returns `{ data, loading, error }`.

---

## ⚡ Module 14: Performance & Advanced Hooks

**Objective:** Understand rendering optimization and managing complex state transitions.

### 1. Optimization: `useMemo` & `useCallback`

React is fast, but heavy calculations or unnecessary re-renders can slow it down.

* **`useMemo` (Values):** Used to "cache" the result of an expensive calculation (like sorting a massive list) so it only re-runs when its dependencies change.
* **`useCallback` (Functions):** Used to "cache" a function definition to prevent it from being re-created on every render, which is essential when passing functions to optimized child components.

### 2. Complex State: `useReducer`

When `useState` becomes messy—such as when you have multiple pieces of state that depend on each other—`useReducer` is the professional solution. It uses a "Redux-style" pattern with:

* **Reducer:** A function that determines how the state changes based on an "action".
* **Dispatch:** The function you call to send an action (instruction) to the reducer.

---

## 🚀 Module 15: Final Project Workshop

**Objective:** Plan, Build, and Deploy your Capstone Project.

### 1. Deployment (The "Go Live" Moment)

To share your work, you must move beyond `localhost`.

* **Build:** `npm run build` creates a `dist` folder with optimized, production-ready code.
* **Host:** Use platforms like **Netlify** or **Vercel**, which connect to your GitHub repository and automatically update your live site whenever you push new code (CI/CD).

---

## 🎓 Week 6 Capstone: "React E-Commerce Store"

**Objective:** Build a professional-grade E-Commerce application to serve as the centerpiece of your portfolio.

### **Project Requirements**

* **Data:** Fetch products from the [FakeStoreAPI](https://fakestoreapi.com/).
* **Logic:** Implement a custom `useFetch` hook for all API calls.
* **State:** Manage the global shopping cart using `CartContext` with either `useState` or `useReducer`.
* **Persistence:** Ensure the cart survives a page refresh by using `localStorage`.
* **Pages:** Create a `Home` (featured items), `Shop` (all items), `ProductDetail` (dynamic routing), and a `Cart` page.

---
