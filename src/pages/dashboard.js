import React from 'react';


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
  // Add more user data here...
];

const Stats = () => {
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
      <div className="flex justify-around items-center bg-gray-100 p-2 rounded-md shadow-md flex-wrap mt-4">
      <div className="bg-white p-4 shadow-md rounded-lg">
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Full Name</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Bookings.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.title}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}</td>
              <td className="px-4 py-2">
                <button className="text-purple-600 hover:underline mr-2">Edit</button>
                <button className="text-purple-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-md float-right">
        Add User
      </button>
    </div>
    </div>
    </div>
    
  );
};



export default Stats;
