import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import imagesReducer from "./imagesSlice";

const store = configureStore({
  reducer: { images: imagesReducer, cart: cartReducer },
});

export default store;
