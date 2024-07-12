import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// it is middleware  
export const fetchData = createAsyncThunk("fetchProductData", async() => {
  
  const response = await axios.get('https://fakestoreapi.com/products/');
  console.log('response data',response.data);
  return response.data;

});

const ProductReducer = createSlice({
  name: "Product",
  initialState: { products: [], pending: false, error: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.products = action.payload;
        state.pending=false;
      })
      .addCase(fetchData.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = 'something went wrong';
      });
  },
});

export default ProductReducer.reducer;
