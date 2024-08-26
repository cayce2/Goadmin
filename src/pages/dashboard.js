import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';

const stats = [
  // ... (your stats data remains unchanged)
];

const Bookings = [
  // ... (your Bookings data remains unchanged)
];

const Stats = () => {
  const [date, setDate] = useState(null);

  const handleExport = () => {
    // Implement export functionality here
    alert('Exporting data...');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Full-width navbar */}
      <nav className="bg-gray-800 text-white w-full p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your App Name</h1>
          <div>
            {/* Add any navigation items here */}
            <a href="#" className="px-3 py-2 rounded hover:bg-gray-700">Home</a>
            <a href="#" className="px-3 py-2 rounded hover:bg-gray-700">About</a>
            <a href="#" className="px-3 py-2 rounded hover:bg-gray-700">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-grow bg-gray-100">
        <div className="container mx-auto p-4">
          {/* Stats section */}
          <div className="flex flex-wrap justify-around items-center bg-white p-2 rounded-md shadow-md mt-4">
            {stats.map((stat, index) => (
              <React.Fragment key={stat.id}>
                <div className="text-center m-4">
                  <h2 className="text-2xl font-bold">{stat.value}</h2>
                  <p className="text-gray-600">{stat.name}</p>
                </div>
                {index < stats.length - 1 && (
                  <div className="w-px h-16 bg-gray-300 mx-4"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Bookings header */}
          <div className="flex flex-wrap justify-between items-center bg-white p-2 rounded-md shadow-md mt-4">
            <div>
              <h2 className="text-lg font-bold">Bookings</h2>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleExport}
              >
                Export
              </button>
              <Calendar value={date} onChange={(e) => setDate(e.value)} placeholder="Select Date" />
            </div>
          </div>

          {/* Bookings table */}
          <div className="bg-white p-2 rounded-md shadow-md mt-4 overflow-auto">
            <div className="w-full p-2 rounded-lg border border-gray-300">
              <table className="w-full border-collapse">
                {/* ... (table content remains unchanged) */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
