import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const item = state.items.find(item => item.id === newItem.id);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.totalPrice + newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          totalPrice: newItem.price,
          price: newItem.price,
          quantity: 1,
          title: newItem.title,
        });
      }
      state.totalQuantity += 1;
      state.totalAmount += newItem.price;
    },
    removeItemFromCart: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.totalPrice - item.price;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
      state.totalQuantity -= 1;
      state.totalAmount -= item.price;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
