
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaChartBar, FaHome, FaComments } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white px-6 py-3 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold"><FaBuilding className="inline-block mr-2" /> BizDirectory</h1>
        <ul className="flex gap-6 text-sm">
          <li><Link to="/" className="hover:text-yellow-300"><FaHome className="inline-block mr-1" /> Login</Link></li>
          <li><Link to="/dashboard" className="hover:text-yellow-300"><FaChartBar className="inline-block mr-1" /> Dashboard</Link></li>
          <li><Link to="/profile" className="hover:text-yellow-300"><FaBuilding className="inline-block mr-1" /> Profile</Link></li>
          <li><Link to="/messages" className="hover:text-yellow-300"><FaComments className="inline-block mr-1" /> Messaging</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
