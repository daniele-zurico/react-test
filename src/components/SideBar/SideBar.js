import React from 'react';
import './SideBar.css';
import classNames from 'classnames';
const SideBar = (props) => {

  var sideNav = classNames({
    'side-nav': true,
    'open': props.status,
    'close': !props.status
  });

  if(props.status) {
    console.log('open');
  } else {
    console.log('close');
  }
  return (
    <div id="side-menu" className={sideNav}>
      <a href='#' className='btn-close' onClick={props.closeSlideMenu}>&times;</a>
      <a href='#'>Home</a>
      <a href='#'>About</a>
      <a href='#'>Service</a>
      <a href='#'>Contact</a>
    </div>
  );
}

export default SideBar;