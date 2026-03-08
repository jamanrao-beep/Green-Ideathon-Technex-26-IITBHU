import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'; // Import your separate Navbar
import { Thermometer, Droplets, Zap, Activity } from 'lucide-react';
import './DashboardMetrics.css';

const Dashboard = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`dashboard-root ${isVisible ? 'fade-in' : ''}`}>
            {/* USE THE COMPONENT HERE - DELETE THE OLD <nav> BLOCK */}
            <Navbar />

            <main className="dash-content">
                <header className="content-header">
                    <h1>Direct-to-Chip Telemetry</h1>
                    <p>IoT-Based Smart Optimization</p>
                </header>

                <div className="metrics-container">
                    <div className="metrics-row">
                        <div className="metric-card">
                            <Thermometer className="icon-emerald" />
                            <div className="card-info">
                                <h3>Chip Temperature</h3>
                                <p className="stat">42.5°C</p>
                                <span>DS18B20 Sensor</span>
                            </div>
                        </div>
                        <div className="metric-card">
                            <Droplets className="icon-emerald" />
                            <div className="card-info">
                                <h3>Coolant Flow</h3>
                                <p className="stat">2.8 L/min</p>
                                <span>YF-S201 Sensor</span>
                            </div>
                        </div>
                    </div>

                    <div className="metrics-row">
                        <div className="metric-card">
                            <Zap className="icon-emerald" />
                            <div className="card-info">
                                <h3>Heat Recovery</h3>
                                <p className="stat">ACTIVE</p>
                                <span>Thermal Bank</span>
                            </div>
                        </div>
                        <div className="metric-card">
                            <Activity className="icon-emerald" />
                            <div className="card-info">
                                <h3>AI Prediction</h3>
                                <p className="stat">STABLE</p>
                                <span>LSTM Model</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;