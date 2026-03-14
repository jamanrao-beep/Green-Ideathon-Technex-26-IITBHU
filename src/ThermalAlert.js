import React, { useState, useEffect } from 'react';
import './ThermalAlert.css';

const ThermalAlert = () => {
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        // Simulating an autonomous thermal spike detection
        const timer = setTimeout(() => {
            setAlert(true);
        }, 5000); // Alert pops up after 5 seconds
        return () => clearTimeout(timer);
    }, []);

    if (!alert) return null;

    return (
        <div className="alert-overlay">
            <div className="alert-box">
                <div className="alert-header">
                    <h3>Thermal Anomaly Detected</h3>
                </div>
                <p><strong>DS18B20 Array</strong> reporting critical chip temperature.</p>
                <div className="alert-action">
                    <span className="action-tag">AI ACTION:</span>
                    Initializing Pump & Closed-Loop Circulation
                </div>
                <button className="dismiss-btn" onClick={() => setAlert(false)}>Acknowledge</button>
            </div>
        </div>
    );
};

export default ThermalAlert;