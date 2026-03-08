import React, { useEffect, useState } from 'react';
import './Welcome.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';

// 1. Destructure onStart from props
const Welcome = ({ onStart }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // 2. Define the handleInitialize function
    const handleInitialize = () => {
        if (onStart) onStart();   // Tells App.js to unlock the other pages
        navigate('/dashboard');   // Moves the user to the Dashboard
    };

    return (
        <div className="welcome-container">
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
                        <img src={logo} alt="JSB Logo" className="welcome-logo" />
                        <h1 className="hero-title">JAL SANRAKSHAN BUDDHI</h1>
                        <p className="theme-subtitle">AQUA-NEURAL NEXUS | DIRECT-TO-CHIP</p>
                    </div>

                    <div className="action-area">
                        {/* 3. The Button calling the function */}
                        <button
                            className="enter-btn"
                            onClick={handleInitialize}
                        >
                            INITIALIZE SYSTEM
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;