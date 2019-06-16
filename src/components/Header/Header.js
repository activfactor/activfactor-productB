import React, { Component } from 'react';
import Logo from '../UI/Logo';
import AuthNav from './NavigationBar/AuthNav';
import NavigationBar from './NavigationBar/NavigationBar';

class Header extends Component{
    render(){
        return (
          <header>
            <div className="header--container">
              <Logo />
              <AuthNav />
            </div>
              <NavigationBar />
          </header>
        );
    }
}

export default Header;