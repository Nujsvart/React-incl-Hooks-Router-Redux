import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;
    const index = state.items.findIndex(el => el.id === action.payload.id);
    if (index === -1) {
      updatedItems = [...state.items, action.payload];
    } else {
      updatedItems = [...state.items];
      updatedItems[index].amount += action.payload.amount;
    }

    return {
      items: updatedItems,
      totalAmount:
        state.totalAmount + action.payload.price * action.payload.amount,
    };
  }
  if (action.type === "REMOVE") {
    let updatedItems;
    const index = state.items.findIndex(el => el.id === action.payload);
    if (state.items[index].amount === 1) {
      updatedItems = state.items.filter(el => el.id !== action.payload);
    } else {
      updatedItems = [...state.items];
      updatedItems[index].amount -= 1;
    }

    return {
      items: updatedItems,
      totalAmount: state.totalAmount - state.items[index].price,
    };
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
