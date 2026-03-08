import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './Welcome';
import Dashboard from './Dashboard';
import CoreInnovation from './CoreInnovation.js';
import './App.css';
import Architecture from './Architecture';
import AboutUs from './AboutUs';

function App() {
  const [isInitialized, setIsInitialized] = useState(false);

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