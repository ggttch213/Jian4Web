import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/auth.css';

export  function Forgetps() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle forgot password logic here
    console.log('Submitting forgot password request for email:', email);
  };

  return (
    <div className="auth-container">
      <h2>忘記密碼</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>電子郵件</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit" className="auth-button">提交</button>
      </form>
      <div className="register-link">
        還沒有帳號? <Link to="/register">點此註冊</Link>
      </div>
      <div className="login-link">
        返回 <Link to="/login">登入</Link>
      </div>
    </div>
  );
}


