import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
    // placeholder array, replace with fetched data or props
    const sampleProducts = [
        { id: 1, name: 'Example Product 1' },
        { id: 2, name: 'Example Product 2' },
        { id: 3, name: 'Example Product 3' },
    ];

    return (
        <section className="products">
            <h1>Our Products</h1>
            <ul>
                {sampleProducts.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
            <p>
                This is a placeholder product listing page. Hook up your API or state
                management solution to render actual data.
            </p>
        </section>
    );
}

export default Products;
