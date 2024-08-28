import React, { useState, useEffect } from 'react';
import { Calendar } from 'primereact/calendar';
import axios from 'axios';
import * as XLSX from 'xlsx';

const Bookings = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/bookings');
        setData(response.data);
        setFilteredData(response.data);
        setTotalRecords(response.data.length);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch bookings. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const filtered = data.filter(booking =>
        new Date(booking.date).toDateString() === selectedDate.toDateString()
      );
      setFilteredData(filtered);
      setTotalRecords(filtered.length);
      setCurrentPage(1);
    } else {
      setFilteredData(data);
      setTotalRecords(data.length);
    }
  }, [selectedDate, data]);

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings");
    XLSX.writeFile(workbook, "Bookings.xlsx");
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.value);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow w-full">
          <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        {/*<main className="w-full">
          <div className="w-full px-4 py-6 sm:px-6 lg:px-8">{<Dashboard />}</div>
        </main>*/}
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
                Export to Excel
              </button>
              <Calendar value={selectedDate} onChange={handleDateChange} placeholder="Select Date" />
            </div>
          </div>

          {/* Bookings table */}
          <div className="bg-white p-2 rounded-md shadow-md mt-8 overflow-auto">
            <div className="w-full p-2 rounded-lg border border-gray-300">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-1 text-sm">Booking ID</th>
                    <th className="border p-1 text-sm">Full Name</th>
                    <th className="border p-1 text-sm">Employee No</th>
                    <th className="border p-1 text-sm">Date</th>
                    <th className="border p-1 text-sm">Shift</th>
                    <th className="border p-1 text-sm">Route</th>
                    <th className="border p-1 text-sm">Destination</th>
                    <th className="border p-1 text-sm">Estate</th>
                    <th className="border p-1 text-sm">Phone No</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRecords.length > 0 ? (
                    currentRecords.map((booking) => (
                      <tr key={booking._id}>
                        <td className="border p-1 text-sm">{booking._id}</td>
                        <td className="border p-1 text-sm">{booking.fullName}</td>
                        <td className="border p-1 text-sm">{booking.employeeNo}</td>
                        <td className="border p-1 text-sm">{new Date(booking.date).toLocaleDateString()}</td>
                        <td className="border p-1 text-sm">{booking.shift}</td>
                        <td className="border p-1 text-sm">{booking.route}</td>
                        <td className="border p-1 text-sm">{booking.destination}</td>
                        <td className="border p-1 text-sm">{booking.estate}</td>
                        <td className="border p-1 text-sm">{booking.phoneNo}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="text-center p-4">
                        No bookings found for the selected date.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-center">
            {Array.from({ length: Math.ceil(totalRecords / recordsPerPage) }, (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-3 py-1 border rounded ${
                  currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
