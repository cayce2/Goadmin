import React from "react";

const stats = [
  { label: 'Waiyaki Way', value: '10' },
  { label: 'Ngong Road', value: '10' },
  { label: 'Jogoo Road', value: '10' },
  { label: 'Thika Road', value: '10' },
  { label: 'Mombasa Road', value: '10' },
  { label: 'Lower Kabete', value: '10' },
  { label: 'Total', value: '60' },
];

const data = [
  {
    id: 'AAPSOL',
    company: 'Chase & Co.',
    stock: 'CAC',
    commission: '+$4.37',
    price: '$3,509.00',
    quantity: '12.00',
    netAmount: '$4,397.00',
  },
  // ... other transaction data ...
];

export default function Dashboard() {
  return (
    <>
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net amount</th>
              <th className="px-6 py-3 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.company}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.commission}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.netAmount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-500 hover:text-blue-700">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Export
        </button>
      </div>
    </>
  );
}
