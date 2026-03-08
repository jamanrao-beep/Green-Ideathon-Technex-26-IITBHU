import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './DashboardMetrics.css';

const NexusAI = () => {
    return (
        <div className="dashboard-root fade-in">
            <Navbar />
            <main className="dash-content">
                <header className="content-header">
                    <h1 className="emerald-text">Nexus AI Framework</h1>
                    <p>Autonomous Control & Predictive Logic</p>
                </header>

                <div className="metrics-container">
                    {/* Intelligence Section from PDF */}
                    <div className="metric-card full-width">
                        <div className="card-info">
                            <h3>Control Logic Framework</h3>
                            <ul className="logic-list">
                                <li>Flow verification to detect dry-runs or blockages [cite: 44]</li>
                                <li>Real-time leak detection and overflow prevention [cite: 45, 46]</li>
                                <li>Energy-saving mode activation during thermal stability [cite: 47]</li>
                                <li>Automatic modulation based on localized datasets [cite: 88, 145]</li>
                            </ul>
                        </div>
                    </div>

                    <div className="metrics-row">
                        <div className="metric-card">
                            <div className="card-info">
                                <h3>IoT & Digital Layer</h3>
                                <span>Wi-Fi data transmission & logging [cite: 54, 57]</span>
                                <p className="stat">ACTIVE</p>
                                <span>Remote status alerts enabled [cite: 56]</span>
                            </div>
                        </div>
                        <div className="metric-card">
                            <div className="card-info">
                                <h3>Digital Validation</h3>
                                <span>Wokwi Virtual Prototype [cite: 49]</span>
                                <p className="stat">VERIFIED</p>
                                <span>Firmware logic fully simulated [cite: 130]</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NexusAI;