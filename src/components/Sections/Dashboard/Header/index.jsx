import React,{ Component } from 'react';
// import classes from './index.module.scss';
import ContentBlock from '../../../UI/ContentBlock';

class Header extends Component{
    render(){
        return(
            <div className="dashboard_header">
                <ContentBlock number="320" unit="$" description="Account Worth" />
                <ContentBlock number="109" unit="$" description="Account Gain" />
                <ContentBlock number="280" unit="$" description="Watchlists Worth" />
                <ContentBlock number="5" unit="%" description="Watchlists Gain" />
            </div>
        );
    }
}

export default Header;