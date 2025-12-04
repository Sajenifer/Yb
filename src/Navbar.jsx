import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">My Portfolio</h1>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about-me">About Me</Link></li>
          <li><Link to="/update">Update</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;