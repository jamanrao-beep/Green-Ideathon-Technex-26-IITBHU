import React, { useState, useEffect } from 'react';
import './LeakMonitor.css';

const LeakMonitor = ({ intensity }) => {
    // Simulate pressure: 0-100%
    const [pressure, setPressure] = useState(85);
    const [status, setStatus] = useState('NOMINAL');

    useEffect(() => {
        const interval = setInterval(() => {
            setPressure(prev => {
                // If intensity is high (Overclock), pressure fluctuates more
                const noise = (Math.random() - 0.5) * (intensity / 20);
                const next = Math.max(0, Math.min(100, prev + noise));

                // Logic: Sudden drop = Leak detected
                if (next < 40) setStatus('CRITICAL LEAK');
                else if (next < 65) setStatus('PRESSURE WARNING');
                else setStatus('NOMINAL');

                return next;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [intensity]);

    // SVG Gauge calculation
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (pressure / 100) * circumference;

    return (
        <div className={`leak-monitor-card ${status.toLowerCase().replace(' ', '-')}`}>
            <h4 className="monitor-title">AI_LEAK_PREDICTION_ENGINE</h4>
            <div className="gauge-container">
                <svg width="180" height="180">
                    <circle className="gauge-bg" cx="90" cy="90" r={radius} />
                    <circle
                        className="gauge-fill"
                        cx="90" cy="90" r={radius}
                        style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
                    />
                </svg>
                <div className="gauge-value">
                    <span className="number">{pressure.toFixed(1)}</span>
                    <span className="unit">PSI</span>
                </div>
            </div>
            <div className="status-indicator">
                <span className="pulse-dot"></span>
                <span className="status-text">{status}</span>
            </div>
        </div>
    );
};

export default LeakMonitor;