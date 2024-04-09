import { IAuthCredentials, IAuthResponse } from "@/features/auth/model/auth.interfaces";
import baseApi from "./authApi";

export const loginSlice = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      login: builder.mutation<IAuthResponse, IAuthCredentials>({
         query: (credentials) => ({
            url: "auth/login",
            method: "POST",
            body: { ...credentials },
         }),
      }),
   }),
});

export const { useLoginMutation } = loginSlice;
