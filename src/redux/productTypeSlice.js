import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductTypes = createAsyncThunk(
  'productTypes/fetchProductTypes',
  async (_, {rejectWithValue, dispatch}) => {
    
      const res = await axios.get('https://my-json-server.typicode.com/HoRRoR909/cnc-json/productTypes')
      console.log(res.data)
      return res.data
      
  }
)

// const setError = (state, action) => {
//   state.status = 'rejected'
//   state.error = action.payload
// }

const initialState = {
  productTypes: [],
  status: null,
  error: null
} 

const productSlice = createSlice({
  name: "productTypes",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // state.products = action.payload
      // state.products.unshift({
        // id: Date.now(),
        
        // state.products = action.payload
      // })
    }
  },
  extraReducers: {
    [fetchProductTypes.pending]: (state) => {
        state.status = 'loading'
        state.error = null
        console.log('loading')
    },
    [fetchProductTypes.fulfilled]: (state, action) => {
        state.status = 'resolved'
        state.error = null
        state.productTypes = action.payload
        console.log('fullfiled')

    },
    [fetchProductTypes.rejected]: (state) => {
      state.status = 'rejected'
      console.log('rejected')
  },
    // [fetchProducts.rejected]: setError,
    // [deleteTodo.rejected]: setError,
    // [toggleStatus.rejected]: setError,
}
})

export const { addProduct } = productSlice.actions
export default productSlice.reducer