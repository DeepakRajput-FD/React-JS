import { configureStore } from "@reduxjs/toolkit";
import Slice1 from "./Slice1";

export const store=configureStore({
    reducer:{
        counterValue1:Slice1
    }
})
