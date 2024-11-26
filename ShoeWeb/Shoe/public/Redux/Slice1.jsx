import { createSlice } from "@reduxjs/toolkit";

const slice1=createSlice({
    name:'slice1',
    initialState:{addData:[]},
    reducers:{
        Addingdata:(state,action)=>{
            state.addData=action.payload;
        }
    }
})
export default slice1.reducer;
export const {Addingdata}=slice1.actions;