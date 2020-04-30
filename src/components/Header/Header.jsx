import React from 'react';
import { Logo } from '../Icons';
import { StyledAppBar, StyledToolBar } from './style';
import SearchFiled from '../UI/SearchField';
import NavigationLink from './NavigationLink';

const Header = () => {
    return (
        <StyledAppBar position="static" color="primary">
            <StyledToolBar component="div">
                <Logo color="primary"/>
                <SearchFiled placeholder="Search for stocks" />
                <NavigationLink to="/login" label="login"/>
            </StyledToolBar>
        </StyledAppBar>
    );
};

export default Header;