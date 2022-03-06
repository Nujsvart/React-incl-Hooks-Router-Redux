import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = defaultCartState, action) => {
  switch (action.type) {
    case "ADD":
      let updatedItems;

      if (state.items.find(item => item.id === action.payload.id)) {
        updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, amount: item.amount + action.payload.amount }
            : item
        );
      } else {
        updatedItems = [...state.items, action.payload];
      }

      return {
        items: updatedItems,
        totalAmount:
          state.totalAmount + action.payload.price * action.payload.amount,
      };

    case "REMOVE":
      return state;
    default:
      return state;
  }
};

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: "ADD", payload: item });
  };

  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: "REMOVE", payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
