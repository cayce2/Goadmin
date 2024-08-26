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
      {/* Main content */}
      <div className="flex-grow bg-gray-100">
        <div className="container mx-auto p-4">
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
                <thead>
                  <tr>
                    <th className="border p-4">Booking ID</th>
                    <th className="border p-4">Name</th>
                    <th className="border p-4">Date</th>
                    <th className="border p-4">Route</th>
                  </tr>
                </thead>
                <tbody>
                  {Bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td className="border p-4">{booking.id}</td>
                      <td className="border p-4">{booking.name}</td>
                      <td className="border p-4">{booking.date}</td>
                      <td className="border p-4">{booking.route}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
