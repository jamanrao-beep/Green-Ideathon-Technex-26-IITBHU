import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">

                {/* Top Row: The 3 Centered Links */}
                <div className="footer-links">
                    <a href="https://github.com/jamanrao-beep/Unstoppables_IITPatna" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub Repo</a>
                    <a href="https://wokwi.com/projects/457103122189006849" target="_blank" rel="noopener noreferrer" className="footer-link">Wokwi Simulation</a>
                    <a href="#" className="footer-link">Project Deck</a>
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