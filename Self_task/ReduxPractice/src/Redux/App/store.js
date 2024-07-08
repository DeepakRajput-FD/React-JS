import { configureStore } from "@reduxjs/toolkit";
import Finance from "../Features/Finance";
import todo from "../Todo/todo";

 export const store= configureStore({
    reducer:{
        financeKey:Finance,
        todokey:todo
    }
 })
