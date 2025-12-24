import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you have the CSS file for styling

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/movies">Movie</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tv">TV</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <input type="text" placeholder="Search" className="search-input" />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;