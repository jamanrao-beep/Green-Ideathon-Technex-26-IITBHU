import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './Welcome';
import Dashboard from './Dashboard';
import NexusAI from './nexusAI.js';
import './App.css';

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
            path="/nexus-ai"
            element={isInitialized ? <NexusAI /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;