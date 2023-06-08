import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  
    const adminId = import.meta.env.VITE_REACT_APP_ADMIN_ID;
    const adminPass = import.meta.env.VITE_REACT_APP_ADMIN_PASS;
    {console.log(adminId)}
  
    if (id === adminId && pass === adminPass) {
      localStorage.setItem('loged-in-as', 'admin'); // Save 'loged-in-as' as 'admin' in local storage
      navigate('/home');
    } else {
      setError('Invalid credentials');
      alert('Invalid credentials'); // Display an alert for invalid credentials
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Admin ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Admin Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
      <p>
        Not an admin? <Link to="/login">Go back to login</Link>
      </p>
    </div>
  );
};

export default AdminLogin;
