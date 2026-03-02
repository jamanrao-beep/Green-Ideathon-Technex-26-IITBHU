import React, { useState, useEffect } from 'react';
import { Thermometer, Droplets, Zap, Activity } from 'lucide-react';
import './DashboardMetrics.css';

const Dashboard = () => {
    // Simulate live data from ESP32 sensors
    const [temp, setTemp] = useState(45);
    const [flow, setFlow] = useState(2.4);

    return (
        <div className="dashboard-container">
            <h2>Aqua-Neural Nexus Live Monitor</h2>

            <div className="dashboard-grid">
                {/* Core Innovation Card [cite: 26] */}
                <div className="glass-card">
                    <Thermometer color="#10b981" />
                    <h3>Cooling Block Temp</h3>
                    <p className="live-value">{temp}°C</p>
                    <span>Sensor: DS18B20 </span>
                </div>

                {/* Flow Sensor Card  */}
                <div className="glass-card">
                    <Droplets color="#3b82f6" />
                    <h3>Coolant Flow Rate</h3>
                    <p className="live-value">{flow} L/min</p>
                    <span>Sensor: YF-S201 </span>
                </div>

                {/* AI Prediction Card  */}
                <div className="glass-card">
                    <Activity color="#8b5cf6" />
                    <h3>Predictive Heat Load</h3>
                    <p>Stable (Next 15m)</p>
                    <span>Model: LSTM/GRU </span>
                </div>

                {/* Waste Heat Recovery Status [cite: 212] */}
                <div className="glass-card active">
                    <Zap color="#f59e0b" />
                    <h3>Thermal Bank Status</h3>
                    <p>Recovering 42°C [cite: 213]</p>
                    <span>Recycling for Building Heat [cite: 21]</span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;