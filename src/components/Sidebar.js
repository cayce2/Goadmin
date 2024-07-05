import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="h-screen w-60 bg-gray-900 text-white flex flex-col">
            <div className="p-4">
                <div className="text-lg font-bold">GoAdmin</div>
            </div>
            <nav className="flex-1">
                <ul>
                    <li className="p-4 hover:bg-gray-700"><Link to="/dashboard">Dashboard</Link></li>
                    <li className="p-4 hover:bg-gray-700"><Link to="/users">Users</Link></li>
                    <li className="p-4 hover:bg-gray-700"><Link to="/domains">Domains</Link></li>
                    <li className="p-4 hover:bg-gray-700"><Link to="/settings">Settings</Link></li>
                </ul>
            </nav>
            <div className="p-4 flex items-center">
                <img src="profile.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
                <span className="ml-4">Tom Cook</span>
            </div>
        </div>
    );
};

export default Sidebar;
