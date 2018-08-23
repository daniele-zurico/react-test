import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = ({closeSlideMenu, status}) => {

  var sideNav = classNames({
    'side-nav': true,
    'open': status,
    'close': !status
  });

  return (
    <div id="side-menu" className={sideNav}>
      <div className='btn-close' onClick={closeSlideMenu}>&times;</div>
      <Link to='/home'>Home</Link>
      <Link to='/expenses'>Expenses</Link>
      <Link to='/tags'>Tags</Link>
    </div>
  );
}

export default SideBar;