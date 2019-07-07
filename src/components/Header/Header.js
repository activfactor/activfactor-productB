import React, { Component } from 'react';
import Logo from '../UI/Logo/Logo';
import AuthNav from './AuthNav/AuthNav';
import NavigationBar from './NavigationBar/NavigationBar';
import classes from './Header.module.scss';

class Header extends Component{
    render(){
        return (
          <header>
            <div className={classes.container}>
              <Logo />
              <AuthNav />
            </div>
              <NavigationBar />
          </header>
        );
    }
}

export default Header;