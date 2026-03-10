import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const LiveTempChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Generate initial time-stamped data
        const now = new Date();
        const initialData = Array.from({ length: 15 }).map((_, i) => {
            const time = new Date(now.getTime() - (14 - i) * 2000);
            return {
                timestamp: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
                temp: Math.floor(Math.random() * (55 - 45) + 45),
            };
        });
        setData(initialData);

        const interval = setInterval(() => {
            setData((prevData) => {
                const now = new Date();
                const newTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

                // Logic: Normal operation (40-55), Spike (75-90)
                const isSpike = Math.random() > 0.85;
                const nextTemp = isSpike ? Math.floor(Math.random() * (92 - 75) + 75) : Math.floor(Math.random() * (52 - 42) + 42);

                const newData = [...prevData.slice(1), { timestamp: newTime, temp: nextTemp }];
                return newData;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="chart-container">
            <div className="chart-header">
                <h3 className="chart-title">Thermal Load Telemetry</h3>
                <div className="live-badge">SENSORS ACTIVE</div>
            </div>

            {/* Increased height to 450 for better Y-axis clarity */}
            <div style={{ width: '100%', height: 450 }}>
                <ResponsiveContainer>
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorThermal" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} /> {/* Red Danger */}
                                <stop offset="40%" stopColor="#f59e0b" stopOpacity={0.5} /> {/* Orange Warning */}
                                <stop offset="90%" stopColor="#10b981" stopOpacity={0.1} /> {/* Green Safe */}
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="2 2" vertical={false} stroke="rgba(255, 255, 255, 0.05)" />

                        <XAxis
                            dataKey="timestamp"
                            stroke="#475569"
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                            dy={10}
                        />

                        <YAxis
                            domain={[0, 120]} // Expanded to 125°C
                            stroke="#475569"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            unit="°C"
                        />

                        <Tooltip
                            cursor={{ stroke: '#10b981', strokeWidth: 1 }}
                            contentStyle={{
                                background: '#010a08',
                                border: '1px solid rgba(16, 185, 129, 0.5)',
                                borderRadius: '8px',
                                color: '#fff'
                            }}
                            itemStyle={{ color: '#34d399' }}
                        />

                        {/* Safety Thresholds */}
                        <ReferenceLine y={85} stroke="#ef4444" strokeDasharray="5 5" label={{ position: 'top', value: 'CRITICAL', fill: '#ef4444', fontSize: 10, fontWeight: 'bold' }} />
                        <ReferenceLine y={60} stroke="#f59e0b" strokeDasharray="3 3" label={{ position: 'top', value: 'WARNING', fill: '#f59e0b', fontSize: 10 }} />

                        <Area
                            type="monotone"
                            dataKey="temp"
                            stroke="#00ffa8"
                            strokeWidth={4}
                            fillOpacity={1}
                            fill="url(#colorThermal)"
                            animationDuration={1500}
                            isAnimationActive={true}
                            dot={{ r: 3, fill: '#10b981', strokeWidth: 2, stroke: '#020f0c' }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className="chart-footer-label">Real-time data synchronization with ESP32-S3 Gateway</div>
        </div>
    );
};

export default LiveTempChart;