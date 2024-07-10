import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="lg:hidden p-4 flex justify-between items-center bg-gray-900 text-white">
                <div className="text-lg font-bold">GoAdmin</div>
                <button onClick={toggleSidebar} className="text-white">
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
            <div className={`lg:block ${isOpen ? 'block' : 'hidden'} h-screen w-60 bg-gray-900 text-white flex flex-col fixed lg:relative`}>
                <div className="p-4">
                    <div className="text-lg font-bold">GoAdmin</div>
                </div>
                <nav className="flex-1">
                    <ul>
                        <li className="p-4 hover:bg-gray-700"><Link to="/dashboard">Dashboard</Link></li>
                        <li className="p-4 hover:bg-gray-700"><Link to="/users">Users</Link></li>
                        <li className="p-4 hover:bg-gray-700"><Link to="/calendar">Calendar</Link></li>
                        <li className="p-4 hover:bg-gray-700"><Link to="/settings">Settings</Link></li>
                    </ul>
                </nav>
                <div className="p-4 flex items-center">
                    <img src="profile.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
                    <span className="ml-4">Tom Cook</span>
                </div>
            </div>
        </>
    );
};

export default Sidebar;