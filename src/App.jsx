import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import OnboardingScreen from './pages/onboardingscreen'; 
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-yellow-100 via-sky-100 to-red-100 ">
        <Routes>
          <Route path="/" element={<OnboardingScreen />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
