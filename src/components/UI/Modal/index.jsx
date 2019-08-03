import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className={`modal__container ${props.nameOfClass}`}>
        <div onClick={(e) => e.stopPropagation()} className="modal__wrapper">
            {props.children}
        </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;