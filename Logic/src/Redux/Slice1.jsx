import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:'Counter',
    initialState:{countNumber:5000,name:'deepak'},
    reducers:{
        increment:(state,action)=>
            {
                state.countNumber++;
            },
            decrement:(state,action)=>
                {
                    state.countNumber--;
                }
    }
})
export default slice.reducer;
export const {increment,decrement}=slice.actions; 
