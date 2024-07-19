import { configureStore } from "@reduxjs/toolkit";
import Finance from "../Features/Finance";

 export const store= configureStore({
    reducer:{
        financeKey:Finance,
    }
 })
