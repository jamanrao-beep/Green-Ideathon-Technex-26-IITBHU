import React, { useState } from 'react';
import './CoreInnovation.css'; // We will keep styles in the same CSS file

const ThermalHeatMap = () => {
    const [isCooling, setIsCooling] = useState(false);

    return (
        <div className="heatmap-section">
            <h2 className="emerald-text">Live Thermal Simulation</h2>
            <p className="sim-desc">Direct-to-Chip Surgical Heat Extraction</p>

            <div className="heatmap-container">
                {/* The Processor Chip Simulation */}
                <div className={`server-chip ${isCooling ? 'chilled' : 'overheating'}`}>
                    <div className="chip-grid">
                        {[...Array(16)].map((_, i) => (
                            <div key={i} className="core-cell"></div>
                        ))}
                    </div>

                    {/* The Coolant Pipe Overlays */}
                    <div className={`coolant-pipes ${isCooling ? 'active-flow' : ''}`}>
                        <div className="pipe-line"></div>
                        <div className="pipe-line"></div>
                        <div className="pipe-line"></div>
                    </div>
                </div>

                <div className="simulation-controls">
                    <div className="temp-display">
                        STATUS: <span className={isCooling ? "safe-text" : "danger-text"}>
                            {isCooling ? "32°C - OPTIMAL" : "78°C - CRITICAL"}
                        </span>
                    </div>
                    <button
                        className={`sim-btn ${isCooling ? 'reset-btn' : 'cool-btn'}`}
                        onClick={() => setIsCooling(!isCooling)}
                    >
                        {isCooling ? "STOP PUMP" : "ACTIVATE SURGICAL COOLING"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThermalHeatMap;