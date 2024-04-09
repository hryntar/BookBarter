import { baseApi } from "@/features/auth";
import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "@/features/auth"; 

export const rootReducer = combineReducers({
   [baseApi.reducerPath]: baseApi.reducer, 
   auth: authReducer
})