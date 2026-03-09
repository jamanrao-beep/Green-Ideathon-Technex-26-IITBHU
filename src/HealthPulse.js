import React from 'react';
import './HealthPulse.css';

const HealthPulse = ({ isManual, efficiency = 98 }) => {
    return (
        <div className={`pulse-wrapper ${isManual ? 'warning-mode' : 'optimal-mode'}`}>
            <div className="pulse-ring"></div>
            <div className="pulse-ring"></div>
            <div className="pulse-core">
                <span className="pulse-value">{efficiency}%</span>
                <span className="pulse-label">HEALTH</span>
            </div>
        </div>
    );
};

export default HealthPulse;