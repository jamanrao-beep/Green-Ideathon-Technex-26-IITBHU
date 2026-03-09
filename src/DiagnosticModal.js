import React, { useState, useEffect } from 'react';
import './DiagnosticModal.css';

const DiagnosticModal = ({ isOpen, onClose }) => {
    const [steps, setSteps] = useState([
        { id: 1, label: 'Initializing ESP32-S3 Link', status: 'pending' },
        { id: 2, label: 'Calibrating Thermal Array (DS18B20)', status: 'pending' },
        { id: 3, label: 'Pressurizing Hydraulic Circuit', status: 'pending' },
        { id: 4, label: 'NEXUS-AI Pattern Sync', status: 'pending' },
        { id: 5, label: 'Final Efficiency Audit', status: 'pending' },
    ]);

    useEffect(() => {
        if (isOpen) {
            steps.forEach((step, index) => {
                setTimeout(() => {
                    setSteps(prev => prev.map(s =>
                        s.id === step.id ? { ...s, status: 'complete' } : s
                    ));
                }, (index + 1) * 800);
            });
        } else {
            // Reset when closed
            setSteps(prev => prev.map(s => ({ ...s, status: 'pending' })));
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="diagnostic-card">
                <div className="modal-header">
                    <h3>SYSTEM DIAGNOSTIC v2.4</h3>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>

                <div className="modal-body">
                    <div className="scan-visual">
                        <div className="wireframe-rack">
                            <div className="scan-line"></div>
                            {/* Simple CSS Grid representing a server rack */}
                            {[...Array(9)].map((_, i) => <div key={i} className="rack-unit"></div>)}
                        </div>
                    </div>

                    <div className="checklist">
                        {steps.map(step => (
                            <div key={step.id} className={`step-item ${step.status}`}>
                                <span className="status-icon">{step.status === 'complete' ? '●' : '○'}</span>
                                <span className="step-label">{step.label}</span>
                                {step.status === 'complete' && <span className="done-tag">OK</span>}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="modal-footer">
                    <div className="health-score">
                        OVERALL HEALTH: <span className="score-num">98.4%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiagnosticModal;