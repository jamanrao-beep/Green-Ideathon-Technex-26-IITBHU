import React, { useState, useEffect } from 'react';
import './SustainabilityReport.css';

const SustainabilityReport = () => {
    // 1. State for the ticking counter
    const [waterSaved, setWaterSaved] = useState(1245.85);

    useEffect(() => {
        // Increment by a small random amount every 150ms
        const interval = setInterval(() => {
            setWaterSaved(prev => prev + 0.01);
        }, 150);

        return () => clearInterval(interval);
    }, []);

    const stats = [
        { label: "WATER RECIRCULATION", value: "99.8%", desc: "Closed-loop efficiency" },
        { label: "ENERGY SAVINGS", value: "42%", desc: "vs. Traditional HVAC" },
        { label: "CARBON OFFSET", value: "12.4kg", desc: "Monthly CO2 reduction" },
        { label: "PUE RATING", value: "1.08", desc: "Industry-leading efficiency" }
    ];

    return (
        <div className="sustainability-container">
            <div className="report-header">
                <h3 className="report-title">RESOURCE EFFICIENCY // AUDIT REPORT</h3>
                {/* 2. The Live Counter Display */}
                <div className="live-water-counter">
                    <span className="counter-label">TOTAL WATER CONSERVED:</span>
                    <span className="counter-value">{waterSaved.toFixed(2)} L</span>
                </div>
            </div>

            <div className="stats-grid-sustain">
                {stats.map((item, index) => (
                    <div key={index} className="sustain-card">
                        <div className="sustain-icon">{item.icon}</div>
                        <div className="sustain-data">
                            <span className="sustain-value">{item.value}</span>
                            <span className="sustain-label">{item.label}</span>
                            <span className="sustain-desc">{item.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SustainabilityReport;