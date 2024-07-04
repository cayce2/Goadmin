import React from 'react';

const meetings = [
  {
    id: 1,
    name: 'Leslie Alexander',
    date: 'January 10th, 2022 at 5:00 PM',
    location: 'Starbucks',
    imgUrl: 'path-to-leslie-image.jpg'
  },
  {
    id: 2,
    name: 'Michael Foster',
    date: 'January 12th, 2022 at 3:00 PM',
    location: 'Tim Hortons',
    imgUrl: 'path-to-michael-image.jpg'
  },
  {
    id: 3,
    name: 'Dries Vincent',
    date: 'January 12th, 2022 at 5:00 PM',
    location: 'Costa Coffee at Braehead',
    imgUrl: 'path-to-dries-image.jpg'
  }
];

const Calendar = () => {
  return (
    <div className="p-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Upcoming meetings</h2>
        <div className="flex justify-between items-center mb-4">
          <button className="text-gray-500">&lt;</button>
          <span className="text-lg font-medium">January</span>
          <button className="text-gray-500">&gt;</button>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
            <div key={index} className="text-center text-gray-500">{day}</div>
          ))}
          {[...Array(31)].map((_, index) => (
            <div key={index} className={`text-center py-2 ${index + 1 === 22 ? 'bg-indigo-600 text-white rounded-full' : ''}`}>
              {index + 1}
            </div>
          ))}
        </div>
        <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg w-full">Add event</button>
      </div>
      <div className="mt-4">
        {meetings.map(meeting => (
          <div key={meeting.id} className="flex items-center mb-4">
            <img src={meeting.imgUrl} alt={meeting.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="text-lg font-semibold">{meeting.name}</h3>
              <p className="text-gray-500">{meeting.date}</p>
              <p className="text-gray-500">{meeting.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
