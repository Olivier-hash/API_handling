// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login({ name: username }));
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
