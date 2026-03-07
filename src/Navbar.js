import React from 'react';
import './Navbar.css';
// Import the logo directly from the src folder
import logo from 'logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                {/* Use the imported variable {logo} here */}
                <img src={logo} alt="Logo" className="nav-logo-img" />
                <h1 className="nav-title">JAL SANRAKSHAN BUDDHI</h1>
            </div>

            <ul className="nav-links">
                <li>Home</li>
                <li>Hardware</li>
                <li>About Us</li>
            </ul>
        </nav>
    );
};

export default Navbar;