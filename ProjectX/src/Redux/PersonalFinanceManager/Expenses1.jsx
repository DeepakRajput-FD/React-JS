import { createSlice } from "@reduxjs/toolkit";

const slice1=createSlice({
    name:'Salary',
    initialState:{salary:'',budget:'',expenses:'',moneyexpense:'',savedMoney:''},
    reducers:{
        userSalary:(state,action)=>{
            state.salary=action.payload;
        },
        userBudget:(state,action)=>{
            state.budget=action.payload;
        },
        userExpenses:(state,action)=>{
            state.expenses=action.payload;
        },
        userlosemoney:(state,action)=>{
                    state.moneyexpense=action.payload.Expenses-action.payload.Budget;
            
        },
        usersavedMoney:(state,action)=>{
                state.savedMoney=action.payload.Budget-action.payload.Expenses;   
        }
    }
})
export default slice1.reducer;
export const {userSalary,userBudget,userExpenses,userlosemoney,usersavedMoney}=slice1.actions;
