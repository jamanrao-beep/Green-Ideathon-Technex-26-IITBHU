import React, { useState, useEffect, useRef } from 'react';
import './SystemTerminal.css';

const SystemTerminal = () => {
    const [logs, setLogs] = useState([
        { id: 1, time: new Date().toLocaleTimeString(), msg: "SYSTEM INITIALIZED: NEXUS-AI READY", type: "info" },
        { id: 2, time: new Date().toLocaleTimeString(), msg: "GATEWAY: ESP32-S3 CONNECTED via MQTTS", type: "info" }
    ]);

    // This ref now attaches to the BOX itself, not just the bottom
    const terminalBodyRef = useRef(null);

    const eventPool = [
        { msg: "THERMAL SCAN: ALL CORES WITHIN OPERATIONAL LIMITS", type: "info" },
        { msg: "PUMP CALIBRATION: FLOW RATE STABILIZED AT 2.4 L/MIN", type: "success" },
        { msg: "NETWORK: TELEMETRY PACKET SENT TO CLOUD BUCKET", type: "info" },
        { msg: "OPTIMIZATION: AI ADJUSTING COOLANT PRESSURE", type: "info" },
        { msg: "ENERGY RECOVERY: THERMAL BANK DEPOSIT ACTIVE", type: "success" },
        { msg: "SENSOR CHECK: DS18B20 ARRAY ONLINE", type: "info" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const randomEvent = eventPool[Math.floor(Math.random() * eventPool.length)];
            const newLog = {
                id: Date.now(),
                time: new Date().toLocaleTimeString(),
                ...randomEvent
            };

            setLogs(prev => [...prev.slice(-7), newLog]);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    // FIX: Only scroll the internal content of the terminal, not the whole page
    useEffect(() => {
        if (terminalBodyRef.current) {
            const { scrollHeight, clientHeight } = terminalBodyRef.current;
            terminalBodyRef.current.scrollTo({
                top: scrollHeight - clientHeight,
                behavior: "smooth"
            });
        }
    }, [logs]);

    return (
        <div className="terminal-container">
            <div className="terminal-header">
                <div className="terminal-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                </div>
                <div className="terminal-title">system_logs_v1.0.sh</div>
            </div>
            {/* Added the ref here to the scrollable body */}
            <div className="terminal-body" ref={terminalBodyRef}>
                {logs.map(log => (
                    <div key={log.id} className={`log-line ${log.type}`}>
                        <span className="log-time">[{log.time}]</span>
                        <span className="log-cursor"> $ </span>
                        <span className="log-msg">{log.msg}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SystemTerminal;