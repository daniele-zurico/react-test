import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = ({ openSlideMenu }) => {
  return (
    <nav className="navbar">
      <span className="open-slide">
        <a onClick={openSlideMenu}>
          <svg width="30" height="30">
            <path d="M0,5 30,5" stroke="#fff" strokeWidth="5" />
            <path d="M0,14 30,14" stroke="#fff" strokeWidth="5" />
            <path d="M0,23 30,23" stroke="#fff" strokeWidth="5" />
          </svg>
        </a>
      </span>
      <ul className="navbar-nav">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/expenses">Expenses</Link>
        </li>
        <li>
          <Link to="/tags">Tags</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
