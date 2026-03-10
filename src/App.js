import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './Welcome';
import Dashboard from './Dashboard';
import CoreInnovation from './CoreInnovation.js';
import './App.css';
import Architecture from './Architecture';
import AboutUs from './AboutUs';
import { useWaterRipple } from './useWaterRipple';

function App() {
  useWaterRipple();
  const [isInitialized, setIsInitialized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate system boot-up time
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="boot-loader">
        <div className="boot-content">
          <div className="boot-logo">🌿</div>
          <div className="boot-text-wrap">
            <p className="boot-line">INITIALIZING NEXUS-AI...</p>
            <p className="boot-line">CONNECTING TO ESP32 GATEWAY...</p>
            <p className="boot-line">SYSTEM STATUS: <span className="green-glow">READY</span></p>
          </div>
          <div className="boot-bar"><div className="boot-progress"></div></div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* If NOT initialized, show Welcome. If they try to go elsewhere, redirect to Welcome */}
          <Route
            path="/"
            element={<Welcome onStart={() => setIsInitialized(true)} />}
          />

          <Route
            path="/dashboard"
            element={isInitialized ? <Dashboard /> : <Navigate to="/" />}
          />

          <Route
            path="/core-innovation"
            element={isInitialized ? <CoreInnovation /> : <Navigate to="/" />}
          />

          <Route
            path="/architecture"
            element={isInitialized ? <Architecture /> : <Navigate to="/" />}
          />
          <Route
            path="/about-us"
            element={isInitialized ? <AboutUs /> : <Navigate to="/" />}
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;