import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <main className="home">
            <h1>Welcome to Barnabs Store</h1>
            <p>
                This is the home page of your React application. Use this area to provide
                an engaging introduction or highlight featured products.
            </p>
            <Link to="/products">Browse Products</Link>
        </main>
    );
}

export default Home;
