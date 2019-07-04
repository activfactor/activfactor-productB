import React,{ Component } from 'react';
import classes from './index.module.scss';

class Button extends Component{
    render(){
        return (
            <button name={this.props.value} className={`${classes.btn} ${this.props.nameOfClass}`} onClick={() =>this.props.onClick(this.props.value)}>
                {this.props.valueDisplay}
                <span className={classes.btnDesc}>
                  {this.props.span}
                </span>
            </button>
        );
    }
    
};

export default Button;