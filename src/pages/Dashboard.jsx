import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const Dashboard = () => {
  const chartData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [120000, 150000, 200000, 250000, 320000],
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        tension: 0.3,
      },
    ],
  };

  const kpis = [
    { label: 'Revenue', value: '$320,000', color: 'bg-blue-100 text-blue-800' },
    { label: 'Growth', value: '27%', color: 'bg-green-100 text-green-800' },
    { label: 'ROI', value: '11%', color: 'bg-yellow-100 text-yellow-800' },
  ];

  return (
    <div className="p-6">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">📊 Business Dashboard</h1>
        <p className="text-gray-500">Welcome back! Here's your business performance overview.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {kpis.map((kpi, i) => (
          <div
            key={i}
            className={`p-4 rounded shadow ${kpi.color} border-l-4 border-gray-300`}
          >
            <h3 className="text-lg font-semibold">{kpi.label}</h3>
            <p className="text-xl font-bold">{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Revenue Trend (Last 5 Years)</h2>
        <Line data={chartData} />
      </div>

      {/* Optional: Recent Products or Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold text-lg mb-2">Recent Products</h3>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>🛒 T-Shirt Collection — $25</li>
            <li>🎮 Gamepad V2 — $55</li>
            <li>📚 Dev Book Set — $40</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold text-lg mb-2">Recent Messages</h3>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>📩 John: “Interested in your products!”</li>
            <li>📩 Sara: “Looking for partnership.”</li>
            <li>📩 Michael: “Can we talk pricing?”</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
