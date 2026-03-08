import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './DashboardMetrics.css';

const Dashboard = () => {
    return (
        <div className="dashboard-root fade-in">
            <Navbar />

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
                                <h3>Cooling Flow</h3>
                                <p className="stat">2.4 L/min</p>
                                <div className="flow-bar"><div className="flow-progress"></div></div>
                                <span>YF-S201 Active</span>
                            </div>
                        </div>
                        <div className="metric-card">
                            <div className="card-info">
                                <h3>AI Model</h3>
                                <p className="stat">LSTM-v2</p>
                                <span>Predictive Analysis</span>
                            </div>
                        </div>
                        <div className="metric-card">
                            <div className="card-info">
                                <h3>Thermal Bank</h3>
                                <p className="stat">42°C</p>
                                <span>Energy Recovery</span>
                            </div>
                        </div>
                        <div className="metric-card">
                            <div className="card-info">
                                <h3>Chip Temp</h3>
                                <p className="stat">38°C</p>
                                <span>DS18B20 Array</span>
                            </div>
                        </div>
                    </div>

                    {/* FEASIBILITY COMPARISON SECTION */}
                    <div className="feasibility-container">
                        <h3 className="emerald-text">Efficiency Comparison: Liquid vs. Air Cooling</h3>
                        <div className="comparison-table-wrapper">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Metric</th>
                                        <th>Traditional Air Cooling</th>
                                        <th>Jal Sanrakshan Buddhi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Water Consumption</td>
                                        <td>High (Evaporative Loss)</td>
                                        <td>Zero (Closed-Loop) [cite: 32, 94]</td>
                                    </tr>
                                    <tr>
                                        <td>Heat Management</td>
                                        <td>Vented/Wasted</td>
                                        <td>Recovered as Energy Asset [cite: 33, 98]</td>
                                    </tr>
                                    <tr>
                                        <td>Cooling Precision</td>
                                        <td>Ambient/Rack Level</td>
                                        <td>Surgical Direct-to-Chip [cite: 26, 73]</td>
                                    </tr>
                                    <tr>
                                        <td>Operational Mode</td>
                                        <td>Constant/Manual</td>
                                        <td>Autonomous AI-Regulated [cite: 86, 144]</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* LAYER 2: New Technical & Sustainability Integration */}
                    <div className="metric-card full-width innovation-gradient">
                        <div className="innovation-content">
                            <div className="innovation-text">
                                <h3>Core Innovation: Closed-Loop Architecture</h3>
                                <p>A fully recirculating hydraulic circuit: <strong>Pump → Cooling Block → Thermal Bank → Pump</strong>.</p>
                                <p>Engineered for zero evaporation loss and zero wastewater discharge.</p>
                            </div>
                            <div className="eco-shield">🌿</div>
                        </div>
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