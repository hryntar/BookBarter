import { authApi } from "@/features/auth";
import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "@/features/auth";
import publishApi from "@/widgets/Publish/model/publishApi";
import booksApi from "@/widgets/Books/model/booksApi";

export const rootReducer = combineReducers({
   [authApi.reducerPath]: authApi.reducer,
   [publishApi.reducerPath]: publishApi.reducer,
   [booksApi.reducerPath]: booksApi.reducer,
   auth: authReducer
})