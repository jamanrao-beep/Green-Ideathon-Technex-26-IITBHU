import React, { useState } from 'react';
import Welcome from './Welcome'; // The new welcome page
import Dashboard from './Dashboard'; // The IoT monitoring dashboard
import Navbar from './Navbar';
import './App.css';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="App">
      {!showDashboard ? (
        // When user clicks 'Explore' on welcome page, it links to dashboard
        <Welcome onStart={() => setShowDashboard(true)} />
      ) : (
        <>
          <Navbar />
          <Dashboard />
        </>
      )}
    </div>
  );
}

export default App;