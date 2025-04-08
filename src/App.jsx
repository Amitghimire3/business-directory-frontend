import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import BusinessDashboard from './pages/BusinessDashboard';
import UserDashboard from './pages/UserDashboard';

function App() {
  const role = localStorage.getItem('role');
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/dashboard" 
          element={
            role === 'business' ? <BusinessDashboard /> : 
            role === 'user' ? <UserDashboard /> : 
            <Navigate to="/login" />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
