import React, { useState, useEffect } from 'react';
import './DiagnosticModal.css';

// 1. MUST include onComplete in the curly braces here!
const DiagnosticModal = ({ isOpen, onClose, onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            const timer = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(timer);
                        // 2. This now works because it's defined above
                        if (onComplete) onComplete();
                        return 100;
                    }
                    return prev + 1;
                });
            }, 30);
            return () => clearInterval(timer);
        } else {
            document.body.style.overflow = 'unset';
            setProgress(0);
        }
    }, [isOpen, onComplete]); // 3. Added onComplete to dependency array

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="diagnostic-card-emerald" onClick={(e) => e.stopPropagation()}>
                <div className="scanner-header">
                    <div className="terminal-title">NEXUS_DIAGNOSTIC_PROTOCOL_v2</div>
                    <button className="close-x" onClick={onClose}>[ CLOSE ]</button>
                </div>

                <div className="scanner-visualizer">
                    <div className="hex-grid"></div>
                    <div className="scanning-bar"></div>
                    <div className="center-target">
                        <div className="target-ring"></div>
                    </div>
                </div>

                <div className="status-container">
                    <div className="progress-text">
                        <span className="blink-text">{progress < 100 ? "ANALYZING THERMAL DEPOSIT..." : "ANALYSIS COMPLETE"}</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="emerald-progress-bar">
                        <div className="fill" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                <div className="modal-footer-info">
                    <p>{progress < 100 ? "Please wait for sequence completion..." : "System Verified. You may close this window."}</p>
                </div>
            </div>
        </div>
    );
};

export default DiagnosticModal;