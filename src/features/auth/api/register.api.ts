import { IRegisterCredentials } from "@/features/auth/model/auth.interfaces";
import { authApi } from "..";

export const registerSlice = authApi.injectEndpoints({
   endpoints: (builder) => ({
      register: builder.mutation<void, IRegisterCredentials>({
         query: (credentials) => ({
            url: "auth/registration",
            method: "POST",
            body: { ...credentials },
         }),
      }),
   }),
});

export const { useRegisterMutation } = registerSlice;
