import { configureStore } from "@reduxjs/toolkit";
import ProductData from "../Features/ProductData";

export const store=configureStore({
    reducer:{
        ProductKey:ProductData
    }
})