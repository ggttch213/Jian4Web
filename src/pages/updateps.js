import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/auth.css';

export function Updateps() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Logging in', { email, password });
  };

  return (
    <div className="auth-container">
      <h2>變更密碼</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>舊密碼</label>
          <input type="name" />
        </div>
        <div className="form-group">
          <label>新密碼</label>
          <input type="email"/>
        </div>
        <div className="form-group">
          <label>確認密碼</label>
          <input type="email"/>
        </div>
        <button type="submit" className="auth-button">完成</button>
      </form>
      
      <div className="forgot-password-link">
        <Link to="/update">編輯會員資料</Link>
      </div>
      
    </div>
  );
}

export default Updateps;
