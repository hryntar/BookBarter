import { baseApi } from "..";

export const logoutSlice = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      logout: builder.query<void, void>({
         query: () => "auth/logout",
      }),
   }),
});

export const { useLogoutQuery } = logoutSlice;
