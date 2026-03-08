import React from 'react';
import Navbar from './Navbar';
import './DashboardMetrics.css';

const Architecture = () => {
    return (
        <div className="dashboard-root fade-in">
            <Navbar />
            <main className="dash-content">
                <header className="content-header">
                    <h1 className="emerald-text">Node Architecture</h1>
                    <p>IoT Hardware Stack & Sensor Integration</p>
                </header>

                <div className="metrics-container">
                    <div className="metric-card">
                        <div className="card-info">
                            <h3>Core Controller</h3>
                            <p className="stat">ESP32 WROOM</p>
                            <span>Dual-Core / Wi-Fi / Bluetooth</span>
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="card-info">
                            <h3>Temp Sensor</h3>
                            <p className="stat">DS18B20</p>
                            <span>Direct-to-Chip Thermal Monitor</span>
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="card-info">
                            <h3>Flow Meter</h3>
                            <p className="stat">YF-S201</p>
                            <span>Hall Effect Water Flow Sensor</span>
                        </div>
                    </div>
                    <div className="metric-card">
                        <div className="card-info">
                            <h3>Cooling Pump</h3>
                            <p className="stat">12V DC</p>
                            <span>PWM Controlled Closed-Loop</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Architecture;