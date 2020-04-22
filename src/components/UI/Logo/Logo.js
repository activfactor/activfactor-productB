import React,{ Component } from 'react';
import history from '../../../history';

class Logo extends Component {
    onClickHandler(){
        history.push('/Dashboard');
    }

    render(){
        return (
            <div className="_header-title" onClick={this.onClickHandler}>WealthFace</div>
        );
    }
};

export default Logo;