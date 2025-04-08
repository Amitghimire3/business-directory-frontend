
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('business');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in as ${role}: ${email}`);
  };

  return (
    <div className="flex justify-center mt-20">
      <form onSubmit={handleLogin} className="bg-white shadow-lg p-6 rounded w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
        <select className="w-full p-2 mb-6 border rounded" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="business">Business</option>
        </select>
        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 w-full">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
