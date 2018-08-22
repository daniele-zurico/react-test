import React from 'react';
import './SideBar.css';
import classNames from 'classnames';
const SideBar = ({closeSlideMenu, status}) => {

  var sideNav = classNames({
    'side-nav': true,
    'open': status,
    'close': !status
  });

  return (
    <div id="side-menu" className={sideNav}>
      <a href='#' className='btn-close' onClick={closeSlideMenu}>&times;</a>
      <a href='#'>Home</a>
      <a href='#'>About</a>
      <a href='#'>Service</a>
      <a href='#'>Contact</a>
    </div>
  );
}

export default SideBar;