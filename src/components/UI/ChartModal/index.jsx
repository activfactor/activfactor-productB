import React from "react";
import ReactDOM from "react-dom";
// import classes from './index.module.scss';

const ChartModal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="modal__container _chart-modal">
      <div onClick={e => e.stopPropagation()} className={`message__wrapper ${props.nameOfClass}`}>
        {props.children}
      </div>
    </div>,
    document.querySelector("#message")
  );
};

export default ChartModal;