import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], isCartToggled: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const existingId = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingId === -1) {
        state.items.push(action.payload);
        return;
      }
      state.items[existingId].totalPrice =
        state.items[existingId].totalPrice + action.payload.totalPrice;
      state.items[existingId].noOfItems =
        state.items[existingId].noOfItems + action.payload.noOfItems;
    },

    removeFromCart(state, action) {
      const existingId = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items.splice(existingId, 1);
    },
    toggleCart(state) {
      state.isCartToggled = !state.isCartToggled;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
