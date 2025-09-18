import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/auth.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Logging in', { email, password });
  };

  return (
    <div className="auth-container">
      <h2>登入</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>電子郵件</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>密碼</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="auth-button">登入</button>
      </form>
      
      <div className="forgot-password-link">
        <Link to="/forgetps">忘記密碼?</Link>
      </div>
      <div className="register-link">
        還沒有帳號? <Link to="/register">點此註冊</Link>
      </div>
    </div>
  );
}

export default Login;
