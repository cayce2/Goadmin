import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/navbar';
//import Dashboard from './pages/dashboard'
import Users from './pages/users';
import Calendar from './pages/calendar'
import Settings from './pages/settings'



const App = () => {
    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="flex-1 p-10">
                    <Routes>
                        
                        <Route path="/users" element={<Users />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
