import { baseApi } from "..";

export const logoutSlice = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      logout: builder.mutation<void, void>({
         // query: () => "auth/logout",
         query: () => ({
            url: "auth/logout",
            method: "POST", 
         }),
      }),
   }),
});

export const { useLogoutMutation } = logoutSlice;
