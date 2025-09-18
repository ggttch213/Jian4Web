import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css'; // 引入 CSS 文件

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">首頁</Link>
        </li>
        <li>
          <Link to="/read">閱讀文章</Link>
        </li>
        <li>
          <Link to="/bmi">BMI日記</Link>
        </li>
        <li>
          <Link to="/menu">健身菜單</Link>
        </li>
        <li>
          <Link to="/update">會員資料</Link>
        </li>
        <li>
          <Link to="/login">註冊/登入</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
