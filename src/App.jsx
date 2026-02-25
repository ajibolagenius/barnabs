import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import './App.css'


function App() {

    return (
        <>
            <nav>
                <Link className='navlink' to="/">Home</Link>
                <Link className='navlink' to="/about">About</Link>
                <Link className='navlink' to="/products">Products</Link>
            </nav>
            <hr />
            <Outlet />
        </>
    )
}

export default App
