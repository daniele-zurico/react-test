import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import classNames from 'classnames';
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      showSideBar: false
    }
  }

  openSlideMenu = () => {
    this.setState({showSideBar: true});
    console.log('open xxx');
  };

  closeSlideMenu = () => {
    this.setState({showSideBar: false});
  };

  render() {
    const {showSideBar} = this.state;
    var main = classNames({
      main: true,
      open: showSideBar,
      close: !showSideBar
    });
    return (
      <React.Fragment>
        <NavBar openSlideMenu={this.openSlideMenu}></NavBar>
        <SideBar status={showSideBar} closeSlideMenu={this.closeSlideMenu}></SideBar>
		
        <div className={main}>
          <h1>Responsive Slide Menu</h1>
        </div>
      </React.Fragment> 
    );
  }
}

export default App;
