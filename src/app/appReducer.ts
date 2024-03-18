import { authApi } from "@/features/auth";
import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "@/features/auth";

export const rootReducer = combineReducers({
   [authApi.reducerPath]: authApi.reducer,
   auth: authReducer
})