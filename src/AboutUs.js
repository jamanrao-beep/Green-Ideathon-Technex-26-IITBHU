import React from 'react';
import './AboutUs.css';
import Navbar from './Navbar';
import amanPhoto from './2501EE41.jpeg';
import nehaPhoto from './neha.jpeg';
import mahaPhoto from './mahalakshmi.png';
import krishnaPhoto from './KTA.jpg';

const AboutUs = ({ backgroundImage }) => {
    return (
        <div className="about-container fade-in">
            <Navbar />
            <div
                className="about-hero"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(6, 18, 26, 0.95)), url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div>
                    <h1 className="about-title">Green Ideathon | Technex '26</h1>
                    <div className="about-subtitle">Jal Sanrakshan Buddhi: Direct-to-Chip Cooling</div>
                    <p className="about-desc">
                        Developing a sustainable, closed-loop thermal management system for data centers. By integrating
                        direct-to-chip liquid cooling with AI-driven predictive optimization, we are significantly reducing
                        water waste and energy consumption in high-performance computing environments.
                    </p>

                    <div className="stats-row">
                        <div className="stat-badge"><span>🎓</span> IIT Patna Team</div>
                        <div className="stat-badge"><span>📍</span> IIT BHU Technex</div>
                        <div className="stat-badge" style={{ borderColor: '#10b981', color: '#10b981' }}><span>💧</span> 40% Water Saved</div>
                    </div>
                </div>
            </div>

            <div className="about-content-section">
                <h2 className="team-section-title">Meet Our Team</h2>

                <div className="team-cards-container">
                    {/* Card 1: Neha */}
                    <div className="profile-card">
                        <div className="profile-info">
                            <div className="profile-name">Perumalla Neha</div>
                            <div className="profile-role">Team Leader | Design & ML Engineer</div>
                            <div className="profile-desc">
                                Co-architects the core thermal prediction models. Neha processes hardware telemetry to refine LSTM models, ensuring the system forecasts heat spikes and adjusts coolant flow with surgical precision.
                            </div>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/neha-perumalla-19475b378/" target="_blank" rel="noreferrer" className="linkedin-link">
                                    LinkedIn Profile
                                </a>
                            </div>
                        </div>
                        <div className="profile-photo-container">
                            <img src={nehaPhoto} alt="Neha" />
                        </div>
                    </div>

                    {/* Card 2: Aman */}
                    <div className="profile-card reverse">
                        <div className="profile-info">
                            <div className="profile-name">Joginapally Aman Rao</div>
                            <div className="profile-role">Full-Stack & ML Engineer</div>
                            <div className="profile-desc">
                                Developed the complete real-time telemetry dashboard. Aman integrated IoT data streams with the frontend architecture, creating a seamless command center for monitoring chip health and system efficiency.
                            </div>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/amanraoj/" target="_blank" rel="noreferrer" className="linkedin-link">
                                    LinkedIn Profile
                                </a>
                            </div>
                        </div>
                        <div className="profile-photo-container">
                            <img src={amanPhoto} alt="Aman" />
                        </div>
                    </div>

                    {/* Card 3: Mahalakshmi */}
                    <div className="profile-card">
                        <div className="profile-info">
                            <div className="profile-name">Mahalakshmi Pattamsetti</div>
                            <div className="profile-role">Hardware Simulations & IoT Engineer</div>
                            <div className="profile-desc">
                                Validates sensor pipelines and manages backend infrastructure. Mahalakshmi engineered the robust data services that connect YF-S201 flow data to the central AI processing unit.
                            </div>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/mahalakshmi-pattamsetti-3321003b4/" target="_blank" rel="noreferrer" className="linkedin-link">
                                    LinkedIn Profile
                                </a>
                            </div>
                        </div>
                        <div className="profile-photo-container">
                            <img src={mahaPhoto} alt="Mahalakshmi" />
                        </div>
                    </div>

                    {/* Card 4: Krishna */}
                    <div className="profile-card reverse">
                        <div className="profile-info">
                            <div className="profile-name">Krishna Teja Degala</div>
                            <div className="profile-role">IoT & Hardware Specialist</div>
                            <div className="profile-desc">
                                Lead on physical hardware integration. Krishna calibrated the ESP32 and DS18B20 sensor arrays, ensuring high-fidelity data acquisition within the liquid-cooled environment.
                            </div>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/krishnatejaiitp/" target="_blank" rel="noreferrer" className="linkedin-link">
                                    LinkedIn Profile
                                </a>
                            </div>
                        </div>
                        <div className="profile-photo-container">
                            <img src={krishnaPhoto} alt="Krishna" />
                        </div>
                    </div>
                </div>

                {/* --- UPDATED SHOWCASE BOX WITH 4 ICONS --- */}
                <div className="hackathon-showcase">
                    <div className="showcase-title">Developed for <span>Green Ideathon</span></div>

                    <p className="showcase-desc">
                        Our project addresses the critical water-energy nexus in data centers. <strong>Jal Sanrakshan Buddhi</strong> provides a scalable, direct-to-chip cooling solution that optimizes resource usage through intelligent IoT-driven control systems.
                    </p>

                    <div className="showcase-badge">
                        <span>🏆</span> Technex '26 Finalist Team
                    </div>

                    <div className="showcase-tech-row">
                        <div className="tech-item">
                            <div className="tech-icon">🔬</div>
                            <span>Direct-to-Chip</span>
                        </div>
                        <div className="tech-item">
                            <div className="tech-icon">🤖</div>
                            <span>AI Optimization</span>
                        </div>
                        <div className="tech-item">
                            <div className="tech-icon">📟</div>
                            <span>IoT Node</span>
                        </div>
                        <div className="tech-item">
                            <div className="tech-icon">🌿</div>
                            <span>Sustainability</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;