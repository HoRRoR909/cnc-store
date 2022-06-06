import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: []
} 
console.log(initialState);

const cartSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addCartProduct: (state, action) => {
      // const productId = state.cartProducts.find(product => product.id === action.payload.id);
      // const notProductId = state.cartProducts.find(product => product.id !== action.payload.id);
      // notProductId.id !== action.payload.id ? 
      state.cartProducts.push(action.payload)
      //  :
      // productId.count = 8
      // console.log(action.payload.id);
    }
  }
})

export const { addCartProduct } = cartSlice.actions
export default cartSlice.reducer

// {
//   id: Date.now(),
//   name: action.payload.name,
//   price: action.payload.price,
//   imageUrl: action.payload.imageUrl,
//   // count: action.payload.count
// }