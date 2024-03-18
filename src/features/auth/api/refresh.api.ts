import { IAuthResponse } from "@/shared/types/auth.interfaces";
import { authApi } from "..";

export const refreshSlice = authApi.injectEndpoints({
   endpoints: (builder) => ({
      refresh: builder.query<IAuthResponse, void>({
         query: () => "/refresh",
      }),
   }),
});

export const { useRefreshQuery } = refreshSlice;
