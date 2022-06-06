import { configureStore } from "@reduxjs/toolkit";
import productTypeSlice from "./productTypeSlice";
import cartSlice from "./cartSlice";

export default configureStore({
  reducer: {
    productTypeReducer: productTypeSlice,
    cartReducer: cartSlice
    
  } 
}); 