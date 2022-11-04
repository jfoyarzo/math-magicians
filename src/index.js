import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
