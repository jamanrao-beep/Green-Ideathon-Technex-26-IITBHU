import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logo from './logo.svg';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <img src={logo} alt="Logo" className="nav-logo-img" />
                <h1 className="nav-title">JAL SANRAKSHAN BUDDHI</h1>
            </div>
            <ul className="nav-links">
                {/* Link to /dashboard instead of / */}
                <li><Link to="/dashboard">Home</Link></li>
                <li><Link to="/nexus-ai">Nexus AI</Link></li>
                <li>Architecture</li>
                <li>About Us</li>
            </ul>
        </nav>
    );
};

export default Navbar;