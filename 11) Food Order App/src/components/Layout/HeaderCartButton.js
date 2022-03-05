import React from "react";
import CartIcon from "../Cart/CartIcon";

import classes from "./headercartbutton.module.css";

const HeaderCartButton = ({ setCartIsShown }) => {
  return (
    <button onClick={() => setCartIsShown(true)} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
