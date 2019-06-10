import React, { Component } from 'react';
import Logo from './Logo';

class Header extends Component{
    render(){
        return (
            <div className="header--container">
                <Logo />
            </div>
        );
    }
}

export default Header;