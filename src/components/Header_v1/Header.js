import React, {Component} from 'react';
import Logo from '../UI/Logo/Logo';
import AuthNav from './AuthNav/AuthNav';
import NavigationBar from './NavigationBar/NavigationBar';

class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <div className="_header-top">
          <Logo/>
          <AuthNav/>
        </div>
        <NavigationBar/>
      </header>
    );
  }
}

export default Header;