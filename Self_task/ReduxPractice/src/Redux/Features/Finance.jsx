import { createSlice } from "@reduxjs/toolkit";

const slice1= createSlice({
    name:'Finance',
    initialState:{salary:'',budget:'',data:[]},
    reducers:{
        Add:(state,action)=>{
            console.log(action);
            state.salary=action.payload.salary;
            state.budget=action.payload.budget;
        },
        AddItems:(state,action)=>{
            console.log(action.payload);
            state.data.push(action.payload)
        },
        decrmentUserBudget:(state,action)=>{
            console.log(action.payload);
            state.budget=state.budget-action.payload;
        }
    }
})
export default slice1.reducer;
export const {Add,AddItems,decrmentUserBudget}=slice1.actions;