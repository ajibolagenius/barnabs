import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div className="error-page">
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <p>
                It looks like you've hit a dead end. Use the navigation below to get back
                on track.
            </p>
            <Link to="/">Go back to Home</Link>
        </div>
    );
}

export default ErrorPage;
