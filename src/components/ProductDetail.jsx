import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();

    return (
        <article className="product-detail">
            <h2>Product Details</h2>
            <p>You're viewing details for product ID: <strong>{id}</strong></p>
            <p>
                This is a placeholder for the product detail component. Connect it to
                your data source and render real product information here.
            </p>
        </article>
    );
}

export default ProductDetail;
