import React from "react"

const stats = [
    { id: 1, name: 'route 1', value: '10' },
    { id: 2, name: 'route 1', value: '10' },
    { id: 3, name: 'route 1', value: '10' },
    { id: 4, name: 'route 1', value: '10' },
    { id: 5, name: 'route 1', value: '10' },
    { id: 6, name: 'route 1', value: '10' },
    { id: 7, name: 'route 1', value: '10' },
    { id: 8, name: 'Total', value: '70' },
  ]
  
  export default function Dashboard() {
    return (
      <div className="bg-white py-24 sm:py-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
    
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-6 text-center lg:grid-cols-8">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-8">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        
      </div> 
    )
  }
  