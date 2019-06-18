import React,{ Component } from 'react';
import history from '../../../history';
import classes from './Logo.module.scss';

class Logo extends Component {
    onClickHandler(){
        history.push('/Dashboard');
    }

    render(){
        return (
            <div className={classes.container} onClick={this.onClickHandler}>
                <p>WealthFace</p>
            </div>
        );
    }
};

export default Logo;