import React, { useEffect, useState } from 'react';
import './Welcome.css';

const Welcome = ({ onStart }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="welcome-container">
            {/* Bluish Water System - Nudged Down */}
            <div className="water-ambient">
                <div className="wave-wrap wave-1"></div>
                <div className="wave-wrap wave-2"></div>
                <div className="wave-wrap wave-3"></div>
            </div>

            <div className={`glass-console ${isLoaded ? 'active' : ''}`}>
                <span className="border-line top"></span>
                <span className="border-line right"></span>
                <span className="border-line bottom"></span>
                <span className="border-line left"></span>

                <div className="console-inner">
                    <div className="text-content">
                        <p className="event-brand">TECHNEX '26</p>
                        <h1 className="hero-title">JAL SANRAKSHAN BUDDHI</h1>
                        <p className="theme-subtitle">DIRECT-TO-CHIP LIQUID COOLING</p>
                    </div>

                    <div className="action-area">
                        <button className="neon-btn" onClick={onStart}>
                            INITIALIZE SYSTEM
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;