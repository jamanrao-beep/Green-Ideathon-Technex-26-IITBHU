import React from 'react';
import Navbar from './Navbar';
import './DashboardMetrics.css';

const NexusAI = () => {
    return (
        <div className="dashboard-root fade-in">
            <Navbar /> {/* This ensures you have navigation on the AI page too */}
            <main className="dash-content">
                <header className="content-header">
                    <h1 className="emerald-text">Nexus AI Engine</h1>
                    <p>LSTM/GRU Predictive Thermal Management</p>
                </header>
                {/* Your metrics here... */}
            </main>
        </div>
    );
};

export default NexusAI;