import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <span className="logo-text">Jal Sanrakshan Buddhi</span>
            </div>
            <ul className="nav-links">
                <li><a href="#welcome">Home</a></li>
                <li><a href="#dashboard">IoT Dashboard</a></li>
                <li><a href="#about">Our Team</a></li>
            </ul>
            <div className="nav-status">
                <span className="status-indicator"></span>
                System: Active
            </div>
        </nav>
    );
};

export default Navbar;