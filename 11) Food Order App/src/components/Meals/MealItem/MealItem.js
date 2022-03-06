import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/CartContext";

import classes from "./mealitem.module.css";

const MealItem = props => {
  const cartCtx = useContext(CartContext);

  const onAddToCart = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={onAddToCart} />
      </div>
    </li>
  );
};

export default MealItem;
