import { IAuthResponse } from "@/features/auth/model/auth.interfaces";
import { authApi } from "..";

export const refreshSlice = authApi.injectEndpoints({
   endpoints: (builder) => ({
      refresh: builder.query<IAuthResponse, void>({
         query: () => "auth/refresh",
      }),
   }),
});

export const { useRefreshQuery } = refreshSlice;
