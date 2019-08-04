import React, { Component } from "react";
import ReactDOM from "react-dom";

class Modal extends Component {
  componentDidMount(){
    document.body.classList.add('backdrop-active');
  }

  componentWillUnmount(){
    document.body.classList.remove('backdrop-active');
  }

  render(){
    return ReactDOM.createPortal(
      <div onClick={this.props.onDismiss} className={`modal__container ${this.props.nameOfClass}`}>
          <div onClick={(e) => e.stopPropagation()} className="modal__wrapper">
              {this.props.children}
          </div>
      </div>,
      document.querySelector("#modal")
    );
  }
};

export default Modal;