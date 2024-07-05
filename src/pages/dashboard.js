import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';

const stats = [
  { id: 1, name: 'route 1', value: '10' },
  { id: 2, name: 'route 1', value: '10' },
  { id: 3, name: 'route 1', value: '10' },
  { id: 4, name: 'route 1', value: '10' },
  { id: 5, name: 'route 1', value: '10' },
  { id: 6, name: 'route 1', value: '10' },
  { id: 7, name: 'route 1', value: '10' },
  { id: 8, name: 'Total', value: '70' },
];

const Bookings = [
  { id: 1, name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { id: 2, name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
  { id: 3, name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
  { id: 4, name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // Add more user data here...
];

const Stats = () => {
  const [date, setDate] = useState(null);

  const handleExport = () => {
    // Implement export functionality here
    alert('Exporting data...');
  };

  return (
    <div>
      <div className="flex justify-around items-center bg-gray-100 p-2 rounded-md shadow-md flex-wrap mt-4">
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
      <div className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-md mt-4">
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
      <div className="flex justify-around items-center bg-gray-100 p-2 rounded-md shadow-md flex-wrap">
        <div className="w-full p-2 rounded-lg border border-gray-300">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-300">Full Name</th>
                <th className="px-4 py-2 border border-gray-300">Title</th>
                <th className="px-4 py-2 border border-gray-300">Email</th>
                <th className="px-4 py-2 border border-gray-300">Role</th>
                <th className="px-4 py-2 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Bookings.map((user) => (
                <tr key={user.id}>
                  <td className="px-4 py-2 border border-gray-300">{user.name}</td>
                  <td className="px-4 py-2 border border-gray-300">{user.title}</td>
                  <td className="px-4 py-2 border border-gray-300">{user.email}</td>
                  <td className="px-4 py-2 border border-gray-300">{user.role}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <button className="text-purple-600 hover:underline mr-2">Edit</button>
                    <button className="text-purple-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Stats;
