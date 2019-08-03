import React from "react";
import ReactDOM from "react-dom";
// import classes from './index.module.scss';

const Message = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="message__container">
        <div onClick={(e) => e.stopPropagation()} className="message__wrapper">
            {props.children}
        </div>
    </div>,
    document.querySelector("#message")
  );
};

export default Message;