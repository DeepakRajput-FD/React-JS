import { configureStore } from "@reduxjs/toolkit";
import Slice1 from "./Slice1";

export const Store1=configureStore({
    reducer:{
        data1:Slice1
    }
})