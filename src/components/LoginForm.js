import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Assuming password is exactly 8 digits
    if (password.length !== 8) {
      setError('Password must be 8 digits long.');
      return;
    }

    // Reset form and error state after successful login
    setEmail('');
    setPassword('');
    setError('');

    // Invoke the onLogin callback from the parent component
    onLogin();
  };

  return (
    <div className="login-form">
      <h2 className="h2-login">Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>          
          <input
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>          
          <input
            type="password"
            value={password}
            placeholder="Password (8 digits)"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className="fomm-btn"type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
