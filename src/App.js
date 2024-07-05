import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const Dashboard = () => <div>Dashboard </div>;
const Users = () => <div>Users</div>;
const Domains = () => <div>Domains</div>;
const Settings = () => <div>Settings</div>;

const App = () => {
    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="flex-1 p-10">
                    <Routes>
                        <Route path="../pages/dashboard" component={Dashboard} />
                        <Route path="/activity" component={Users} />
                        <Route path="/domains" component={Domains} />
                        <Route path="/settings" component={Settings} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
