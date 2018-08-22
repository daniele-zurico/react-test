import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar openSideMenu={openSideMenu}></NavBar>
        <SideBar closeSideMenu={closeSideMenu}></SideBar>
		
        <div id='main'>
          <h1>Responsive Slide Menu</h1>
        </div>
      </React.Fragment> 
    );
  }
}

export default App;
