import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter as Router}from 'react-router-dom';
import Jian4Router from './pages/Jian4router'
import Navbar from './pages/navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
  <Navbar/>
    <Jian4Router />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
