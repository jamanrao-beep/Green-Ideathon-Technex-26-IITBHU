import React from 'react';
import './CoolantSidebar.css';

const CoolantSidebar = ({ isManual }) => {
    return (
        <div className={`coolant-sidebar ${isManual ? 'flow-fast' : 'flow-normal'}`}>
            <div className="pipe-glow"></div>
            <div className="particle-container">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="bubble"></div>
                ))}
            </div>
            <div className="flow-label">HYDRAULIC FLOW</div>
        </div>
    );
};

export default CoolantSidebar;