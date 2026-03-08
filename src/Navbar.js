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
                <li><Link to="/dashboard">Home</Link></li>
                <li><Link to="/core-innovation">Core Innovation</Link></li>
                <li><Link to="/architecture">Architecture</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;