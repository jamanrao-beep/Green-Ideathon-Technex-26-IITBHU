import React from 'react';
import './FutureRoadmap.css';

const FutureRoadmap = () => {
    const phases = [
        {
            title: "Phase 1: Prototyping",
            date: "Current - Q2 2026",
            goals: ["ESP32-S3 Integration", "Single-Node Direct-to-Chip setup", "NEXUS-AI Algorithm Alpha"],
            status: "In Progress",
            icon: "color: #2196F3; font-size: 1.5em;" // Blue color for current phase
        },
        {
            title: "Phase 2: Multi-Rack Scale",
            date: "Q4 2026",
            goals: ["Pumped Two-Phase (P2P) cooling", "Edge Computing integration", "40% Energy Reduction Audit"],
            status: "Planned",
            icon: "color : #FF9800; font-size: 1.5em;" // Orange color for planned phase
        },
        {
            title: "Phase 3: Hyperscale",
            date: "2027+",
            goals: ["District Heating reuse", "Full AI-Automated PUE Optimization", "Carbon-Neutral certification"],
            status: "Vision",
            icon: "color: #4CAF50; font-size: 1.5em;" // Green color for future vision
        }
    ];

    return (
        <div className="roadmap-container">
            <h3 className="roadmap-header">PROJECT SCALING // FUTURE ROADMAP</h3>
            <div className="timeline-wrapper">
                {phases.map((phase, index) => (
                    <div key={index} className={`timeline-card ${phase.status.toLowerCase().replace(' ', '-')}`}>
                        <div className="timeline-icon">{phase.icon}</div>
                        <div className="timeline-content">
                            <div className="phase-meta">
                                <span className="phase-date">{phase.date}</span>
                                <span className="phase-status-tag">{phase.status}</span>
                            </div>
                            <h4 className="phase-title">{phase.title}</h4>
                            <ul className="phase-goals">
                                {phase.goals.map((goal, i) => (
                                    <li key={i}>{goal}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FutureRoadmap;