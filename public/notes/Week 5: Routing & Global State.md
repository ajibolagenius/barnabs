# Week 5: Routing & Global State

Welcome to Week 5! Up until now, your applications have felt like single pages where everything was crammed into `App.jsx`. This week, we unlock the ability to create multi-page experiences and solve the "Prop Drilling" problem using the **Context API**.

---

## 🗺️ Module 11: Client-Side Routing with React Router

**Objective:** Transform your application into a navigable website using `react-router-dom`.

### 1. SPA vs. Traditional Routing

* **Traditional (MPA):** Clicking a link destroys the current page and requests a new HTML file from the server, causing a white screen during loading.
* **Single Page App (SPA):** JavaScript intercepts the click, prevents the refresh, updates the URL, and swaps components instantly.

### 2. The Modern Setup

We use the data-driven `createBrowserRouter` (v6.4+) in `main.jsx`.

**`src/main.jsx`**

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Acts as the "Layout" wrapper
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/products/:id", element: <ProductDetail /> } // Dynamic segment
    ],
  },
]);

```

### 3. The Layout Pattern (`<Outlet />`)

The `<Outlet />` component tells React exactly where to render the child route within a parent layout, such as keeping a `Navbar` visible while changing page content.

---

## 📡 Module 12: Global State with Context API

**Objective:** Eliminate "Prop Drilling" by sharing state directly between distant components.

### 1. The "Prop Drilling" Problem

Prop drilling occurs when you must pass data through many layers of components that don't need it, just to reach a deeply nested child.

### 2. The Context Solution (Create, Provide, Consume)

1. **Create:** Use `createContext()` to define your "data frequency".
2. **Provide:** Wrap your app in a `Provider` component and pass the `value` you want to share.
3. **Consume:** Any child can "tune in" using the `useContext` hook to access that data directly.

---

## 🏗️ Week 5 Take-Home Assignment: "Multi-Page E-Store"

**Objective:** Build a professional multi-page store with dynamic routing and a global shopping cart.

1. **Routing Structure:** Set up routes for `Home`, `Shop`, `ProductDetail` (dynamic), and `Cart`.
2. **Data Fetching:** In the `Shop` page, fetch products from an external API (like `fakestoreapi.com`).
3. **Global Cart Context:** * Create a `CartContext` to manage an array of items.
* Implement an `addToCart` function that components can call from anywhere.


4. **Integration:** Display the cart item count in the `Navbar` regardless of which page the user is on.

---