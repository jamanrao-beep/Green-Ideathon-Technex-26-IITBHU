import React from 'react';
import './HardwareMap.css';

const HardwareMap = ({ isManual }) => {
    return (
        <div className="hardware-map-container">
            <h3 className="map-title">HARDWARE ARCHITECTURE // LIVE MAP</h3>

            <div className="map-grid">
                {/* Node 1: Direct-to-Chip Block */}
                <div className="hw-node chip-node">
                    <div className="node-icon">🔳</div>
                    <div className="node-info">
                        <span className="node-label">NVIDIA A100 UNIT</span>
                        <span className="node-status green-glow">THERMAL SYNC: ACTIVE</span>
                    </div>
                </div>

                {/* The Connector Line */}
                <div className="hw-line horizontal">
                    <div className={`flow-indicator ${isManual ? 'fast' : ''}`}></div>
                </div>

                {/* Node 2: Hydraulic Pump */}
                <div className={`hw-node pump-node ${isManual ? 'manual-pulse' : ''}`}>
                    <div className="node-icon">🌀</div>
                    <div className="node-info">
                        <span className="node-label">HYDRAULIC PUMP v2</span>
                        <span className="node-status">
                            {isManual ? <span className="orange-glow">MANUAL OVERRIDE</span> : <span className="green-glow">AI-REGULATED</span>}
                        </span>
                    </div>
                </div>

                <div className="hw-line vertical"></div>

                {/* Node 3: Liquid Reservoir */}
                <div className="hw-node reservoir-node">
                    <div className="node-icon">💧</div>
                    <div className="node-info">
                        <span className="node-label">COOLANT BANK</span>
                        <span className="node-status green-glow">LEVEL: 94%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HardwareMap;