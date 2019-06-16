import React,{ Component } from 'react';
import history from '../../history';

class Logo extends Component {
    onClickHandler(){
        history.push('/Dashboard');
    }

    render(){
        return (
            <div className="header--container__logo" onClick={this.onClickHandler}>
                <p>WealthFace</p>
            </div>
        );
    }
};

export default Logo;