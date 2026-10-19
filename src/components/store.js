import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./Useinfoslice";

export const store=configureStore({

    reducer:{
        response:useReducer
    }
})

export default store;
