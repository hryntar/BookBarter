import { BaseQueryApi, BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./appStore";
import { logOut, setCredentials } from "@/features/auth";

export const baseQuery = fetchBaseQuery({
   baseUrl: import.meta.env.VITE_BASE_API_PUBLISH_URL,
   credentials: "include",
   prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.accessToken;
      if (token) {
         headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
   },
});

export const baseBookQueryWithReAuth: BaseQueryFn = async (
   args: Parameters<BaseQueryFn>[0],
   api: BaseQueryApi,
   extraOptions: Parameters<BaseQueryFn>[2]
) => {
   let result = await baseQuery(args, api, extraOptions);

   if (result?.error?.status === 403) {
      const refreshResult = await baseQuery("/refresh", api, extraOptions);
      if (refreshResult?.data) {
         api.dispatch(setCredentials({ ...refreshResult.data }));
         result = await baseQuery(args, api, extraOptions);
      } else {
         api.dispatch(logOut());
      }
   }

   return result;
};