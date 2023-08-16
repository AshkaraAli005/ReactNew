import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FormPage from './form';
import TablePage from './table';

function App() {
  const [formDataList, setFormDataList] = useState([]);

  const handleFormSubmit = (data) => {
    setFormDataList([...formDataList, data]);
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <h2 className='navh2'>Personal Details</h2>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/table" className="nav-link">Table</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<div className="container"><FormPage onSubmit={handleFormSubmit} /></div>} />
          <Route path="/table" element={<TablePage formDataList={formDataList} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
