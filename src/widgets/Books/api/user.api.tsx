import { baseApi } from "@/features/auth";
import { IUser } from "../model/user.interface";

export const userSlice = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getUser: builder.query<IUser, void>({
         query: () => "api/user/get",
         keepUnusedDataFor: 120,
      }),
   }),
});

export const { useGetUserQuery } = userSlice;
