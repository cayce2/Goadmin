import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Calendar from './pages/calendar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/users" component={Users} />
        <Route path="/settings" component={Settings} />
        <Route path="/calendar" component={Calendar} />
      </Routes>
    </Router>
  );
}

export default App;
