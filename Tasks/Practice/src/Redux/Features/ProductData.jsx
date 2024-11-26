import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchProductData=createAsyncThunk('FetchProductData',async()=>{
    const response1 = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log("==========",response1.data);
    console.log("==FETCH =====",response1.data);

    return response1.data;
})

const product=createSlice({
    name:'Product',
    initialState:{product:[],pending:false,error:''},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(FetchProductData.fulfilled,(state,action)=>{
            state.product=action.payload;
            console.log('stat product',state.product);
            
            state.pending=false;
        }).addCase(FetchProductData.pending,(state,action)=>{
            state.pending=true;
        }).addCase(FetchProductData.rejected,(state,action)=>{
            state.error=action.state.error.message;
        })
    }
})
export default product.reducer;