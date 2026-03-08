import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">

                {/* Top Row: The 3 Centered Links */}
                <div className="footer-links">
                    <a href="https://github.com/jamanrao-beep/Green-Ideathon-Technex-26-IITBHU" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub Repository</a>
                    <a href="https://wokwi.com/projects/456673985844366337" target="_blank" rel="noopener noreferrer" className="footer-link">Hardware Simulation</a>
                    <a href="https://wokwi.com/projects/456673985844366337" target="_blank" rel="noopener noreferrer" className="footer-link">Architectural Deck</a>
                </div>

                {/* Bottom Row: Team Credit */}
                <div className="footer-credit">
                    <span className="theme-icon">🌿</span>Engineered by IIT Patna Team
                </div>

            </div>
        </footer>
    );
};

export default Footer;