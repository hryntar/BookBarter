import { IAuthCredentials, IAuthResponse } from "@/features/auth/model/auth.interfaces";
import { authApi } from "..";

export const loginSlice = authApi.injectEndpoints({
   endpoints: (builder) => ({
      login: builder.mutation<IAuthResponse, IAuthCredentials>({
         query: (credentials) => ({
            url: "/auth",
            method: "POST",
            body: { ...credentials },
         }),
      }),
   }),
});

export const { useLoginMutation } = loginSlice;
