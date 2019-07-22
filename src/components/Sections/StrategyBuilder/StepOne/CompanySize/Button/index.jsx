import React,{ Component } from 'react';

class Button extends Component{
    render(){
        return (
            <button name={this.props.value} className={`${this.props.nameOfClass} btn-company-size`} onClick={() =>this.props.onClick(this.props.value)}>
                <span className="_title">{this.props.valueDisplay}</span>
                <span className="_description">{this.props.span}</span>
            </button>
        );
    }
    
};

export default Button;