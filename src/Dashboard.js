import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './DashboardMetrics.css';
import ThermalAlert from './ThermalAlert';

const Dashboard = () => {
    return (
        <div className="dashboard-root fade-in">
            <Navbar />

            <ThermalAlert />

            <main className="dash-content">
                <header className="content-header">
                    <h1 className="emerald-text">System Command Center</h1>
                    <p>Jal Sanrakshan Buddhi | Direct-to-Chip Telemetry</p>
                </header>

                {/* LAYER 1: Your Original 4 Core Metric Boxes */}
                <div className="metrics-container">
                    <div className="metrics-row">
                        <div className="metric-card pulse-border">
                            <div className="card-info">
                                <h2>Cooling Flow</h2>
                                <p className="stat">2.4 L/min</p>
                                <div className="flow-bar"><div className="flow-progress"></div></div>
                                <span>YF-S201 Active</span>
                            </div>
                        </div>
                        <div className="metric-card">
                            <div className="card-info">
                                <h2>AI Model</h2>
                                <p className="stat">LSTM-v2</p>
                                <span>Predictive Analysis</span>
                            </div>
                        </div>
                        <div className="metric-card">
                            <div className="card-info">
                                <h2>Thermal Bank</h2>
                                <p className="stat">42°C</p>
                                <span>Energy Recovery</span>
                            </div>
                        </div>
                        <div className="metric-card">
                            <div className="card-info">
                                <h2>Chip Temp</h2>
                                <p className="stat">38°C</p>
                                <span>DS18B20 Array</span>
                            </div>
                        </div>
                    </div>

                    {/* SUSTAINABILITY SCORE METER */}
                    <div className="sustainability-meter-container">
                        <h3 className="emerald-text">Sustainability Impact Score</h3>
                        <div className="meter-wrapper">
                            <div className="meter-base">
                                <div className="meter-fill" style={{ width: '100%' }}></div>
                            </div>
                            <div className="meter-labels">
                                <div className="meter-stat">
                                    <span className="stat-value">100%</span>
                                    <span className="stat-desc">Water Retention [cite: 94]</span>
                                </div>
                                <div className="meter-stat">
                                    <span className="stat-value">0%</span>
                                    <span className="stat-desc">Evaporation Loss [cite: 30, 96]</span>
                                </div>
                                <div className="meter-stat highlight-stat">
                                    <span className="stat-value">ACTIVE</span>
                                    <span className="stat-desc">Heat Recovery [cite: 33, 98]</span>
                                </div>
                            </div>
                        </div>
                        <p className="meter-footnote">
                            *Calculated based on the Closed-Loop Direct Cooling architecture which eliminates freshwater addition and discharge[cite: 29, 31, 32].
                        </p>
                    </div>

                    <div className="metrics-row">
                        <div className="metric-card detail-card">
                            <h3>System Feasibility</h3>
                            <ul className="logic-list">
                                <li>Zero Fresh Water Consumption</li>
                                <li>Net Zero Emission Alignment</li>
                                <li>Heat Recovery for Hot Water Supply</li>
                                <li>Autonomous Thermal Modulation</li>
                            </ul>
                        </div>
                        <div className="metric-card detail-card">
                            <h3>Control Logic</h3>
                            <ul className="logic-list">
                                <li>Dry-run & Blockage Detection</li>
                                <li>Real-time Leak Monitoring</li>
                                <li>Energy-Saving Mode (Active)</li>
                                <li>ESP32 Wi-Fi Data Logging</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Dashboard;