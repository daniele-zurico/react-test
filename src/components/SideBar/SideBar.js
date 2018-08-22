import React from 'react';
import './SideBar.css';
const SideBar = () => {
  
  const closeSlideMenu = () => {
    console.log('close');
  }

  return (
    <div id="side-menu" className='side-nav'>
      <a href='#' className='btn-close' onClick={closeSlideMenu}>&times;</a>
      <a href='#'>Home</a>
      <a href='#'>About</a>
      <a href='#'>Service</a>
      <a href='#'>Contact</a>
    </div>
  );
}

export default SideBar;