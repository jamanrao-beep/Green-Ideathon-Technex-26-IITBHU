import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './DashboardMetrics.css';
import './Architecture.css';

const Architecture = () => {
    return (
        <div className="dashboard-root fade-in">
            <Navbar />

            <main className="dash-content">
                <header className="content-header">
                    <h1 className="emerald-text">System Architecture</h1>
                    <p>The Aqua-Neural Nexus Infrastructure</p>
                </header>

                {/* SECTION 1: DATA FLOW DIAGRAM (Visual Representation) */}
                <section className="arch-section">
                    <h2 className="section-subtitle">Data Pipeline Flow</h2>
                    <div className="flow-container">
                        <div className="flow-step">
                            <div className="flow-icon">🌡️</div>
                            <p>Sensors (DS18B20/YF-S201)</p>
                        </div>
                        <div className="flow-arrow">➜</div>
                        <div className="flow-step">
                            <div className="flow-icon">📡</div>
                            <p>ESP32 Node (Edge Processing)</p>
                        </div>
                        <div className="flow-arrow">➜</div>
                        <div className="flow-step">
                            <div className="flow-icon">🧠</div>
                            <p>Nexus AI (LSTM Model)</p>
                        </div>
                        <div className="flow-arrow">➜</div>
                        <div className="flow-step">
                            <div className="flow-icon">💻</div>
                            <p>Command Dashboard</p>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: HARDWARE SPECS TABLE */}
                <section className="arch-section">
                    <h2 className="section-subtitle">Hardware Component Ledger</h2>
                    <div className="specs-table-container">
                        <table className="specs-table">
                            <thead>
                                <tr>
                                    <th>Component</th>
                                    <th>Model / Spec</th>
                                    <th>Primary Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Microcontroller</td>
                                    <td>ESP-32 WROOM 32</td>
                                    <td>Central Gateway & WiFi Bridge</td>
                                </tr>
                                <tr>
                                    <td>Thermal Array</td>
                                    <td>DS18B20 (Waterproof)</td>
                                    <td>Direct-to-Chip Temperature Monitoring</td>
                                </tr>
                                <tr>
                                    <td>Flow Analysis</td>
                                    <td>YF-S201 Hall Effect</td>
                                    <td>Coolant Velocity & Leak Detection</td>
                                </tr>
                                <tr>
                                    <td>Coolant Logic</td>
                                    <td>12V DC PWM Pump</td>
                                    <td>AI-Modulated Liquid Circulation</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Architecture;