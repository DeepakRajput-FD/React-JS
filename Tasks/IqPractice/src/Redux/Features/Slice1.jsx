import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchData=createAsyncThunk('fetchProductData',async()=>{
    const response= await axios.get('https://fakestoreapi.com/products/');
    console.log(response.data);
        return response.data
})

const slice1=createSlice({
    name:'Slice1',
    initialState:{productData:[],pending:false,err:''},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(FetchData.fulfilled,(state,action)=>{
            state.allData=action.payload;
            state.pending=false
        }).addCase(FetchData.pending,(state,action)=>{
            state.pending=true;
        }).addCase(FetchData.rejected,(state,action)=>{
            state.err='Something have error'
        })
    }
})
export default slice1.reducer;