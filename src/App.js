import React, { useState } from 'react';
import Welcome from './Welcome';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [systemInitialized, setSystemInitialized] = useState(false);

  return (
    <div className="App">
      {!systemInitialized ? (
        <Welcome onStart={() => setSystemInitialized(true)} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;