import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>🖋️ InkSoul</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/stories">Stories</Link>
        <Link to="/submit">Submit</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
