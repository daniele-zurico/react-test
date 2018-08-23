import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import classNames from 'classnames';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import routes from './routes';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      showSideBar: false
    }
  }

  openSlideMenu = () => {
    this.setState({showSideBar: true});
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
      <BrowserRouter>
        <React.Fragment>
          <NavBar openSlideMenu={this.openSlideMenu}></NavBar>
          <SideBar status={showSideBar} closeSlideMenu={this.closeSlideMenu}></SideBar>
          <div className={main}>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
              <Redirect from="/" to="home"/>
            </Switch>
          </div>
        </React.Fragment> 
      </BrowserRouter>
    );
  }
}

export default App;
