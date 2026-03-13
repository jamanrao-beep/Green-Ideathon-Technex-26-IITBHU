import React, { useState, useEffect } from 'react';
import './AIToast.css';

const AIToast = ({ intensity }) => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Trigger toast when intensity changes significantly
        const mode = intensity > 70 ? 'OVERCLOCK' : intensity < 30 ? 'ECO' : 'BALANCED';
        setMessage(`NEXUS_AI: Adjusting flow rate for ${mode} logic...`);
        setVisible(true);

        const timer = setTimeout(() => setVisible(false), 3000);
        return () => clearTimeout(timer);
    }, [intensity]);

    if (!visible) return null;

    return (
        <div className="ai-toast">
            <div className="toast-border"></div>
            <div className="toast-content">
                <span className="toast-icon"></span>
                <span className="toast-text">{message}</span>
            </div>
            <div className="toast-progress-bar"></div>
        </div>
    );
};

export default AIToast;