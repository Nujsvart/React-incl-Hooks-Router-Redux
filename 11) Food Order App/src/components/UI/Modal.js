import React from "react";
import ReactDOM from "react-dom";

import classes from "./modal.module.css";

const Backdrop = props => {
  return (
    <div
      onClick={() => props.setCartIsShown(false)}
      className={classes.backdrop}
    />
  );
};

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop setCartIsShown={props.setCartIsShown} />,
        document.querySelector("#modal")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.querySelector("#modal")
      )}
    </>
  );
};

export default Modal;
