import { configureStore } from "@reduxjs/toolkit/react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { rootReducer } from "./appReducer";
import { authApi } from "@/features/auth";
import publishApi from "@/widgets/Publish/model/publishApi";
import booksApi from "@/widgets/Books/model/booksApi";

export const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware).concat(publishApi.middleware).concat(booksApi.middleware),
   // devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;