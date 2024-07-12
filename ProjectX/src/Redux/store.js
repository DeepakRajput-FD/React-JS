import { configureStore } from "@reduxjs/toolkit";
import Counter from "./Counter";
import score from "./score";
import todo from "./Todo/todo";
import ApiProducts from "./Features/ApiProducts";

export const store=configureStore({
        reducer:
        {
            counterKey:Counter,
            scoreKey:score,
            todokey:todo,
            ProductKey:ApiProducts
        }
})