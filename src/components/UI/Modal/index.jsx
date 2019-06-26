import React from "react";
import ReactDOM from "react-dom";
import classes from './index.module.scss';

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className={classes.container}>
        <div onClick={(e) => e.stopPropagation()} className={classes.subcontainer}>
            {props.children}
        </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;