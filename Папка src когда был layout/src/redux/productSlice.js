import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async function() {
    
      const response = await fetch('https://my-json-server.typicode.com/HoRRoR909/cnc-json/products')

      const data = await response.json()
      console.log(data)
      return data
      
    
  }
)

// const setError = (state, action) => {
//   state.status = 'rejected'
//   state.error = action.payload
// }

const initialState = {
  products: [],
  status: null,
  error: null
} 

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.unshift({
        id: Date.now(),
        name: action.payload.name,
        // text: action.payload.text
      })
    }
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
        state.status = 'loading'
        state.error = null
    },
    [fetchProducts.fulfilled]: (state, action) => {
        state.status = 'resolved'
        state.error = null
        state.products = action.payload

    },
    // [fetchProducts.rejected]: setError,
    // [deleteTodo.rejected]: setError,
    // [toggleStatus.rejected]: setError,
}
})

export const { addProduct } = productSlice.actions
export default productSlice.reducer