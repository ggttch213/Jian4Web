// src/components/Register.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/auth.css';

export function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration logic here
    console.log('Registering', { name, password, confirmPassword, email });
  };

  return (
    <div className="auth-container">
      <h2>註冊</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>名稱</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>密碼</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>確認密碼</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>電子郵件</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit" className="auth-button">註冊</button>
      </form>
      <div className="login-link">
        已經有帳號? <Link to="/login">點此登入</Link>
      </div>
    </div>
  );
}

export default Register;
