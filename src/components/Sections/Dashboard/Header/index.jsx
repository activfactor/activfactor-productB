import React,{ Component } from 'react';
import classes from './index.module.scss';
import ContentBlock from '../../../UI/ContentBlock';

class Header extends Component{
    render(){
        return(
            <div className={classes.container}>
                <ContentBlock number="320" unit="$" description="Watchlists Worth" />
                <ContentBlock number="320" unit="$" description="Watchlists Worth" />
                <ContentBlock number="320" unit="$" description="Watchlists Worth" />
                <ContentBlock number="320" unit="$" description="Watchlists Worth" />
            </div>
        );
    }
}

export default Header;