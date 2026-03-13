import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './DashboardMetrics.css';
import ThermalHeatMap from './ThermalHeatMap';
import './CoreInnovation.css';
import FutureRoadmap from './FutureRoadmap';

const CoreInnovation = () => {
    return (
        <div className="dashboard-root fade-in">
            <Navbar />
            <main className="dash-content">
                <header className="content-header">
                    <h1 className="emerald-text">The Core Innovation</h1>
                    <p>Jal Sanrakshan Buddhi: Thermal Asset Lifecycle</p>
                </header>

                {/* 2x2 GRID SECTION */}
                <div className="innovation-grid-2x2">
                    {/* Step 1: Intelligence Hub */}
                    <div className="innovation-card">
                        <div className="card-step">01</div>
                        <div className="icon-box"></div>
                        <h3>AI Sensing Hub</h3>
                        <p>
                            Utilizes an <strong>ESP32 central controller</strong> to process high-fidelity data from a <strong>DS18B20 thermal array</strong>[cite: 38, 60].
                            It monitors real-time chip health to detect hyperscale thermal anomalies before they propagate[cite: 55, 137].
                        </p>
                    </div>

                    {/* Step 2: Surgical Extraction */}
                    <div className="innovation-card">
                        <div className="card-step">02</div>
                        <div className="icon-box pulse"></div>
                        <h3>Surgical Cooling</h3>
                        <p>
                            Triggered by an <strong>intelligent relay module</strong>, a 12V pump circulates coolant through <strong>copper cold plates</strong>[cite: 13, 15, 38].
                            This ensures surgical heat extraction at the exact point of origin to maximize efficiency[cite: 27, 40].
                        </p>
                    </div>

                    {/* Step 3: Sustainable Transport */}
                    <div className="innovation-card">
                        <div className="card-step">03</div>
                        <div className="icon-box"></div>
                        <h3>Closed-Loop Flow</h3>
                        <p>
                            A fully recirculating hydraulic architecture that ensures <strong>zero fresh water addition</strong> and <strong>no evaporation loss</strong>[cite: 29, 30].
                            The circuit follows a strictly monitored <strong>Pump → Block → Bank</strong> path[cite: 27, 42].
                        </p>
                    </div>

                    {/* Step 4: Asset Transformation */}
                    <div className="innovation-card recovery-glow">
                        <div className="card-step">04</div>
                        <div className="icon-box"></div>
                        <h3>Thermal Asset</h3>
                        <p>
                            Captured energy is deposited into a <strong>Thermal Storage Bank</strong>[cite: 41, 99].
                            Instead of being vented, this waste heat is redirected to provide <strong>building heating</strong> or a <strong>hot water supply</strong>[cite: 21, 23, 176].
                        </p>
                    </div>
                </div>

                {/* ELABORATE DEEP DIVE SECTION */}
                <div className="technical-deep-dive">

                    <section className="step-detail">
                        <h2 className="emerald-text">Step 1: Intelligent Neural Sensing</h2>
                        <p>
                            When the data center workload increases, the **Nexus AI** utilizes a **DS18B20 thermal array** to monitor chip health[cite: 38].
                            The system doesn't just measure ambient air; it targets the exact point of origin to detect heat spikes before they propagate[cite: 43].
                        </p>
                    </section>

                    <section className="step-detail">
                        <h2 className="emerald-text">Step 2: Surgical Fluid Dynamics</h2>
                        <p>
                            Upon detection of critical thresholds, the **ESP32 controller** triggers the **Relay Module** to initialize the pump[cite: 38, 88].
                            Coolant is drawn through **Copper Cold Plates** mounted directly on the silicon[cite: 15, 75].
                            This "surgical" approach ensures maximum thermal transfer with minimal energy expenditure[cite: 69].
                        </p>
                    </section>

                    <section className="step-detail">
                        <h2 className="emerald-text">Step 3: The Sustainable Hydraulic Loop</h2>
                        <p>
                            The heated fluid moves through a strictly **Closed-Loop System**[cite: 6, 95].
                            By following the path of **Pump → Cooling Block → Thermal Bank**, the system achieves zero evaporation loss and requires no fresh water addition[cite: 27, 29, 30].
                        </p>
                    </section>

                    <section className="step-detail">
                        <h2 className="emerald-text">Step 4: Thermal Asset Transformation</h2>
                        <p>
                            The final stage captures thermal energy in a **Thermal Storage Bank**[cite: 41, 176].
                            Instead of venting heat, the system redirects it to **Building Heating** or **Hot Water Supplies**, effectively converting a data center liability into a secondary energy source.
                        </p>
                    </section>

                </div>

                <ThermalHeatMap />

                {/* EFFICIENCY COMPARISON: LIQUID vs. AIR */}
                <section className="efficiency-comparison-section">
                    <h2 className="emerald-text">Engineering Feasibility: Liquid vs. Air Cooling</h2>
                    <div className="comparison-table-wrapper">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Metric</th>
                                    <th>Traditional Air Cooling</th>
                                    <th>Jal Sanrakshan Buddhi (Liquid)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Water Consumption</strong></td>
                                    <td>High (Evaporation & Discharge)</td>
                                    <td>Zero (Closed-Loop Retained)</td>
                                </tr>
                                <tr>
                                    <td><strong>Heat Recovery</strong></td>
                                    <td>Vented as Waste Heat</td>
                                    <td>Captured as Energy Asset</td>
                                </tr>
                                <tr>
                                    <td><strong>Cooling Precision</strong></td>
                                    <td>Ambient Rack Level</td>
                                    <td>Surgical Direct-to-Chip</td>
                                </tr>
                                <tr>
                                    <td><strong>Operational Logic</strong></td>
                                    <td>Manual/Constant Run</td>
                                    <td>Autonomous AI-Regulated</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="feasibility-note">
                        *Based on technical feasibility standards for industry-validated IoT microcontrollers and closed-loop hydraulic systems[cite: 67, 70, 72].
                    </div>
                </section>

                <section className="innovation-section">
                    <FutureRoadmap />
                </section>

                {/* KINETIC SYSTEM SCHEMATIC */}
                <div className="tech-schematic-container">
                    <div className="grid-overlay"></div>
                    <h1 className="schematic-header">Schematic Representation</h1>

                    <div className="schematic-layout">
                        {/* Step 1: Intelligence Hub */}
                        <div className="node intelligence-hub">
                            <div className="node-glow"></div>
                            <div className="node-icon"></div>
                            <h4>AI Control</h4>
                            <span className="node-tag">ESP32 + DS18B20</span>
                        </div>

                        {/* The Connection Loop */}
                        <div className="hydraulic-loop">
                            {/* Stage 2: Extraction */}
                            <div className="node stage-box">
                                <div className="stage-icon"></div>
                                <p>Direct-to-Chip</p>
                                <span className="status-label">Heat Extraction</span>
                            </div>

                            <div className="conduit conduit-horizontal">
                                <div className="coolant-pulse"></div>
                            </div>

                            {/* Stage 3: Storage */}
                            <div className="node stage-box">
                                <div className="stage-icon"></div>
                                <p>Thermal Bank</p>
                                <span className="status-label">Energy Storage</span>
                            </div>

                            <div className="conduit conduit-vertical">
                                <div className="coolant-pulse-vertical"></div>
                            </div>

                            {/* Stage 4: Asset Transformation */}
                            <div className="node stage-box highlight-gold">
                                <div className="stage-icon"></div>
                                <p>Energy Asset</p>
                                <span className="status-label">Heat Recovery</span>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default CoreInnovation;