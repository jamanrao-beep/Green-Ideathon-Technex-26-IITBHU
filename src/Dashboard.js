import React, { useEffect, useState } from 'react';
import { Thermometer, Droplets, Zap, Activity, Home, HardDrive, Info } from 'lucide-react';
import './DashboardMetrics.css';

const Dashboard = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`dashboard-root ${isVisible ? 'fade-in' : ''}`}>
            {/* Navbar with Home, Hardware, and About Us */}
            <nav className="dash-nav">
                <div className="nav-brand">JAL SANRAKSHAN BUDDHI</div>
                <ul className="nav-menu">
                    <li><Home size={18} /> Home</li>
                    <li><HardDrive size={18} /> Hardware</li>
                    <li><Info size={18} /> About Us</li>
                </ul>
                <div className="system-status">
                    <span className="pulse-emerald"></span> SYSTEM: ACTIVE
                </div>
            </nav>

            <main className="dash-content">
                <header className="content-header">
                    <h1>Direct-to-Chip Telemetry</h1>
                    <p>IoT-Based Smart Optimization [cite: 1, 181]</p>
                </header>

                {/* 2x2 Balanced Grid Structure */}
                <div className="metrics-container">
                    <div className="metrics-row">
                        <div className="metric-card">
                            <Thermometer className="icon-emerald" />
                            <div className="card-info">
                                <h3>Chip Temperature</h3>
                                <p className="stat">42.5°C</p>
                                <span>DS18B20 Sensor [cite: 38]</span>
                            </div>
                        </div>
                        <div className="metric-card">
                            <Droplets className="icon-emerald" />
                            <div className="card-info">
                                <h3>Coolant Flow</h3>
                                <p className="stat">2.8 L/min</p>
                                <span>YF-S201 Flow Sensor [cite: 38]</span>
                            </div>
                        </div>
                    </div>

                    <div className="metrics-row">
                        <div className="metric-card">
                            <Zap className="icon-emerald" />
                            <div className="card-info">
                                <h3>Heat Recovery</h3>
                                <p className="stat">ACTIVE</p>
                                <span>Thermal Bank [cite: 41, 99]</span>
                            </div>
                        </div>
                        <div className="metric-card">
                            <Activity className="icon-emerald" />
                            <div className="card-info">
                                <h3>AI Prediction</h3>
                                <p className="stat">STABLE</p>
                                <span>LSTM Model [cite: 196]</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;