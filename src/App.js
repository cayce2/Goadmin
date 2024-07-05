import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/dashboard'
import Users from './pages/Users';


const Domains = () => <div>Domains</div>;
const Settings = () => <div>Settings</div>;

const App = () => {
    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="flex-1 p-10">
                    <Routes>
                    <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/domains" element={<Domains />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
