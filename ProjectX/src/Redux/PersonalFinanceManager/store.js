import { configureStore } from "@reduxjs/toolkit";
import Expenses1 from "./Expenses1";
 export const store=configureStore({
    reducer:{
        ExpensesKey:Expenses1
    }
})

