# 🚀 Week 1: The Modern Ecosystem & React Fundamentals

Welcome to Week 1! This week is about shifting your mindset from traditional, imperative web development to the **declarative, component-based** world of React. We will set up a high-performance environment using **Vite** and establish professional version control workflows with **Git**.

---

## 🏗️ Module 1: The React Philosophy & Environment Setup

### 1. What is React? (The "Why")

React is an open-source JavaScript **library** (not a framework) maintained by Meta. Its primary purpose is to build User Interfaces (UIs) efficiently through a modular approach.

#### **Core Pillars of React**

* **Component-Based Architecture:** Instead of one massive HTML file, you build small, reusable pieces like `<Button />`, `<Navbar />`, or `<UserCard />`.
* **Declarative vs. Imperative:** * **Imperative:** You tell the computer *how* to do it (e.g., "Grab the button, change the color, add a listener").
* **Declarative:** You describe *what* you want the UI to look like based on the current data (), and React handles the updates.


* **The Virtual DOM (VDOM):** To avoid slow, direct updates to the browser's DOM, React creates a lightweight "Virtual" copy. When data changes, it compares the new VDOM to the old one (Diffing) and only updates the specific parts of the real DOM that actually changed.

---

### 2. Professional Tooling: Node.js & Vite

We no longer build React apps by simply linking a script in an HTML file. We use a **build toolchain**.

* **Node.js & npm:** Node.js allows JavaScript to run on your machine (outside the browser). **npm** is the world’s largest software registry, used to install React and other libraries.
* **Vite:** The industry successor to "Create React App." Vite (French for "Fast") is a build tool that provides a near-instant development server by leveraging native ES Modules.

#### **Setting Up Your Project**

1. **Install Node.js:** Download the **LTS (Long-Term Support)** version from [nodejs.org](https://nodejs.org/).
2. **Scaffold with Vite:** Open your terminal and run:
```bash
npm create vite@latest my-react-course -- --template react

```


3. **Install & Run:**
```bash
cd my-react-course
npm install
npm run dev

```



---

### 3. Version Control with Git & GitHub

A professional developer never codes without "save points."

* **Git:** A local version control system to track changes and roll back mistakes.
* **GitHub:** A cloud-based platform to host your Git repositories, essential for collaboration and portfolios.

#### **The Daily Workflow**

* `git init`: Initialize a new repository.
* `git add .`: Stage your changes.
* `git commit -m "feat: setup vite"`: Save a snapshot with a descriptive message.
* `git push`: Send your local snapshots to GitHub.

---

## 🎨 Module 2: JSX & Component Architecture

### 1. JSX: JavaScript XML

JSX is a syntax extension that looks like HTML but is fully powered by JavaScript.

* **It’s not a String:** JSX is converted by a compiler (Babel/SWC) into `React.createElement()` calls.
* **The Rules of JSX:**
1. **Single Parent:** Every component must return one root element. Use a **Fragment** (`<> ... </>`) if you don't want extra `<div>` tags in your HTML.
2. **CamelCase Attributes:** Since it's JS, use `className` instead of `class` and `htmlFor` instead of `for`.
3. **Self-Closing Tags:** Elements without children must end in a slash (e.g., `<img />`, `<br />`, `<input />`).



---

### 2. Functional Components

In modern React, components are simply **JavaScript functions**.

* **Naming Convention:** Component names **must** start with a Capital Letter (e.g., `Header`, not `header`).
* **The "Escape Hatch" (`{}`):** Use curly braces to inject JavaScript variables, math, or function calls directly into your UI.

#### **Example: A Modern Functional Component**

```jsx
// src/components/Greeting.jsx
export default function Greeting() {
  const user = "Ajibola"; // Dynamic data
  const timeOfDay = new Date().getHours() < 12 ? "Morning" : "Evening";

  return (
    <div className="welcome-box">
      <h1>Good {timeOfDay}, {user}!</h1>
      <p>Welcome to the intensive React course.</p>
    </div>
  );
}

```

---

## 🏕️ Week 1 Take-Home Assignment: "The Professional Profile"

**Objective:** Combine Git, Vite, and JSX to build a static profile card.

1. **Environment:** Create a new GitHub repository and scaffold a Vite React project.
2. **Component Architecture:** Create a `src/components/` folder. Build the following:
* `Avatar.jsx`: Returns an `<img />` with your profile picture.
* `Bio.jsx`: Returns an `<h1>` with your name and a `<p>` with your professional summary.
* `SkillList.jsx`: Returns a `<ul>` containing `<li>` tags for your top 3 tech skills.


3. **Composition:** Import all three into `App.jsx` and wrap them in a styled `div`.
4. **Submission:** Push your code to GitHub and ensure your commit messages follow the `feat: description` format.

---