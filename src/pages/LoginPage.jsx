
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('business');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store token and redirect based on role
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      navigate('/dashboard');
      window.location.reload(); // Ensure App.jsx re-renders with new role
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-background flex items-center justify-center min-h-screen">
      <form onSubmit={handleLogin} className="bg-white/90 backdrop-blur-sm shadow-xl p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-2 mb-4 border rounded" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-2 mb-4 border rounded" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
          minLength="6"
        />
        <select 
          className="w-full p-2 mb-6 border rounded" 
          value={role} 
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="user">User</option>
          <option value="business">Business</option>
        </select>
        <button 
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 w-full disabled:opacity-50" 
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
