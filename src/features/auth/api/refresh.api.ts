import { IAuthResponse } from "@/features/auth/model/auth.interfaces";
import { baseApi } from "..";

export const refreshSlice = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      refresh: builder.query<IAuthResponse, void>({
         query: () => "auth/refresh",
      }),
   }),
});

export const { useRefreshQuery } = refreshSlice;
