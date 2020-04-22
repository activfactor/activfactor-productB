import React from "react";
import ReactDOM from "react-dom";
// import classes from './index.module.scss';

class ChartModal extends React.Component {
  componentDidMount(){
    document.body.classList.add('modal__active');
  }

  componentWillUnmount(){
    document.body.classList.remove('modal__active');
  }

  render() {
    return ReactDOM.createPortal(
      <div onClick={this.props.onDismiss} className="modal__container _chart-modal">
        <div onClick={e => e.stopPropagation()} className={`message__wrapper ${this.props.nameOfClass}`}>
          {this.props.children}
        </div>
      </div>,
      document.querySelector("#message")
    );
  }
};

export default ChartModal;