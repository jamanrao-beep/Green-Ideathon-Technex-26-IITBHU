import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './DashboardMetrics.css';
import ThermalAlert from './ThermalAlert';
import LiveTempChart from './LiveTempChart';
import SystemTerminal from './SystemTerminal';
import HealthPulse from './HealthPulse';
import CoolantSidebar from './CoolantSidebar';
import DiagnosticModal from './DiagnosticModal';
import LeakMonitor from './LeakMonitor';
import AIToast from './AIToast';

const Dashboard = () => {
    const [isManual, setIsManual] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isScanned, setIsScanned] = useState(false);
    const [operatingMode, setOperatingMode] = useState(50);

    const handleScanComplete = () => {
        setIsScanned(true); // This will trigger the badge appearance
    };

    const getIntensityColor = () => {
        return operatingMode > 70 ? '#00ffa8' : operatingMode < 30 ? '#2E8B57' : '#00b4d8';
    };

    return (
        <div className="dashboard-root fade-in">


            <CoolantSidebar isManual={isManual} />
            <Navbar />



            <div className="telemetry-bar">
                <div className="status-indicator">
                    <span className="blink-dot"></span>
                    <span className="status-text">MODE: <span className={isManual ? "orange-glow" : "green-glow"}>
                        {isManual ? "MANUAL OVERRIDE" : "AI-AUTONOMOUS"}
                    </span></span>
                </div>
                <div className="ticker-wrap">
                    <div className="ticker-item">PUMP: <span className="green-glow">ACTIVE</span></div>
                    <div className="ticker-separator">|</div>
                    <div className="ticker-item">FLOW: <span className="green-glow">2.4 L/MIN</span></div>
                    <div className="ticker-separator">|</div>
                    <div className="ticker-item">CHIP TEMP: <span className="green-glow">38.2°C</span></div>
                    <div className="ticker-separator">|</div>
                    <div className="ticker-item">RECOVERY: <span className="green-glow">ENABLE</span></div>
                </div>
            </div>

            <ThermalAlert />

            <main className="dash-content">

                {/* 2. The Toggle Switch UI */}
                <div className="control-panel-card">
                    <div className="control-info">
                        <h3>System Control Logic</h3>
                        <p>Switch between Nexus-AI regulation and manual pump override.</p>
                    </div>

                    <div className="toggle-container">
                        <span className={`mode-label ${!isManual ? 'active-green' : ''}`}>AUTO</span>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={isManual}
                                onChange={() => setIsManual(!isManual)}
                            />
                            <span className="slider round"></span>
                        </label>
                        <span className={`mode-label ${isManual ? 'active-orange' : ''}`}>MANUAL</span>
                    </div>
                </div>

                <header className="content-header">
                    <h1 className="emerald-text">System Command Center</h1>
                    <p>Jal Sanrakshan Buddhi | Direct-to-Chip Telemetry</p>
                </header>

                <DiagnosticModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onComplete={handleScanComplete}
                />

                <div className="centered-action-container">
                    <div className="action-row">
                        <button
                            className={`analyze-btn ${isScanned ? 'scanned-state' : ''}`}
                            onClick={() => setIsModalOpen(true)}
                        >
                            {isScanned ? "RE-RUN ANALYSIS" : "RUN SYSTEM ANALYSIS"}
                        </button>

                        {/* THE NEW BADGE */}
                        {isScanned && (
                            <div className="health-badge-emerald">
                                <span className="badge-icon">🛡️</span>
                                <span className="badge-text">SYSTEM HEALTH: OPTIMAL</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="forecast-wrapper">
                    <button
                        className="ai-portal-btn"
                        onClick={() => window.open('http://localhost:8501/', '_blank')}
                    >
                        Launch water efficiency AI
                    </button>
                </div>

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

                    <div className="health-aside">
                        <HealthPulse isManual={isManual} />
                    </div>

                    <AIToast intensity={operatingMode} />

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

                    <section className="dashboard-chart-section">
                        <div className="dashboard-grid">
                            <LeakMonitor intensity={operatingMode} />
                            <LiveTempChart intensity={operatingMode} />
                        </div>
                    </section>

                    <section className="terminal-section">
                        <SystemTerminal />
                    </section>

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