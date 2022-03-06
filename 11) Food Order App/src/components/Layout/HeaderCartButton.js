import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";

import classes from "./headercartbutton.module.css";

const HeaderCartButton = ({ setCartIsShown }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce(
    (acc, item) => acc + +item.amount,
    0
  );

  return (
    <button onClick={() => setCartIsShown(true)} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{ numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
