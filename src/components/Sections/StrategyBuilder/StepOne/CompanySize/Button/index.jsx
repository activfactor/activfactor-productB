import React,{ Component } from 'react';
import classes from './index.module.scss';

class Button extends Component{
    render(){
        return (
            <button name={this.props.value} className={`btn-company-size ${classes.btn} ${this.props.nameOfClass}`} onClick={() =>this.props.onClick(this.props.value)}>
                <span className="_title">{this.props.valueDisplay}</span>
                <span className="_description">{this.props.span}</span>
            </button>
        );
    }
    
};

export default Button;