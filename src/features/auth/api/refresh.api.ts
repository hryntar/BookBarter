import { IAuthResponse } from "@/features/auth/model/auth.interfaces";
import { baseApi } from "..";

export const refreshSlice = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      refresh: builder.mutation<IAuthResponse, void>({
         // query: () => "auth/refresh",
         query: () => ({
            url: "auth/refresh`",
            method: "POST", 
         }),
      }),
   }),
});

export const { useRefreshMutation } = refreshSlice;
