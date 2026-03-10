import React from 'react';
import './CoolantSidebar.css';

const CoolantSidebar = ({ isManual }) => {
    return (
        <div className={`coolant-sidebar ${isManual ? 'flow-alert' : 'flow-optimal'}`}>
            <div className="pipe-structure"></div>
            <div className="particle-flow">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="coolant-drop"></div>
                ))}
            </div>
            <div className="sidebar-label">               HYDRAULIC_NEXUS</div>
        </div>
    );
};

export default CoolantSidebar;