import React from 'react';
import './ComponentHealth.css';

const ComponentHealth = ({ onComponentClick }) => {
    const components = [
        { id: 'esp32', name: "ESP32-S3 Microcontroller", health: 98, voltage: "3.32V", uptime: "142h" },
        { id: 'pump', name: "Hydraulic Pump v2", health: 94, voltage: "12.1V", uptime: "88h" },
        { id: 'sensor', name: "DS18B20 Temp Probe", health: 100, voltage: "4.98V", uptime: "1052h" },
        { id: 'block', name: "Direct-to-Chip Cold Plate", health: 99, voltage: "N/A", uptime: "210h" }
    ];

    return (
        <div className="health-ledger-container">
            <h3 className="ledger-title">HARDWARE_HEALTH_LEDGER // LIVE_TELEMETRY</h3>
            <div className="ledger-table">
                <div className="ledger-header">
                    <span>COMPONENT</span>
                    <span>HEALTH</span>
                    <span>VOLTAGE</span>
                    <span>UPTIME</span>
                </div>
                {components.map((comp) => (
                    <div
                        key={comp.id}
                        className="ledger-row"
                        onClick={() => onComponentClick(comp.id)}
                    >
                        <span className="comp-name">{comp.icon} {comp.name}</span>
                        <span className={`comp-health ${comp.health > 95 ? 'optimal' : 'warning'}`}>
                            {comp.health}%
                        </span>
                        <span className="comp-volt">{comp.voltage}</span>
                        <span className="comp-uptime">{comp.uptime}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComponentHealth;