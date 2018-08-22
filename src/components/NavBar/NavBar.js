import React from 'react';
import './NavBar.css';

const NavBar = ({openSlideMenu}) => {
  return (
    <nav className='navbar'>
      <span className='open-slide'>
        <a href='#' onClick={openSlideMenu}>
        <svg width='30' height='30'>
          <path d='M0,5 30,5' stroke='#fff' strokeWidth='5'/>
          <path d='M0,14 30,14' stroke='#fff' strokeWidth='5'/>
          <path d='M0,23 30,23' stroke='#fff' strokeWidth='5'/>
        </svg>
        </a>
      </span>
      <ul className='navbar-nav'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Service</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;