import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/auth.css';

export function Update() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Logging in', { email, password });
  };

  return (
    <div className="auth-container">
      <h2>編輯會員資料</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>名稱</label>
          <input type="name"/>
        </div>
        <div className="form-group">
          <label>電子郵件</label>
          <input type="email"/>
        </div>
        <button type="submit" className="auth-button">完成</button>
      </form>
      
      <div className="forgot-password-link">
        <Link to="/updateps">變更密碼</Link>
      </div>
      
    </div>
  );
}

export default Update;
