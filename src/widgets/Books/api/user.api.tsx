import { baseApi } from "@/features/auth";
import { IProfile, IUser } from "../model/user.interface";

export const userSlice = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getUser: builder.query<IUser, void>({
         query: () => "api/user/get",
         keepUnusedDataFor: 3,
      }),
      getProfile: builder.query<IProfile, void>({
         query: () => "api/user/get",
         keepUnusedDataFor: 0,
      }),
   }),
});

export const { useGetUserQuery, useGetProfileQuery } = userSlice;
