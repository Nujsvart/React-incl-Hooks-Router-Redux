import React from "react";
import Card from "../Card/Card";
import classes from "./errormodal.module.css";
import Wrapper from "../Wrapper/Wrapper";

const ErrorModal = props => {
  return (
    <Wrapper>
      <div className={classes.backdrop} onClick={props.handleError} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.handleError}>Okay</button>
        </footer>
      </Card>
    </Wrapper>
  );
};

export default ErrorModal;
