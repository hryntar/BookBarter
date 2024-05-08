import { baseApi } from "@/features/auth";
import { INotification, IProfile, IUser } from "../model/user.interface";

export const userSlice = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getUser: builder.query<IUser, void>({
         // query: () => "profile",
         query: () => "api/user/get",
         keepUnusedDataFor: 3,
      }),
      getProfile: builder.query<IProfile, void>({
         query: () => "api/user/get",
         keepUnusedDataFor: 0,
      }),
      getNotifications: builder.query<INotification[], void>({ 
         query: () => "api/notifications",
         keepUnusedDataFor: 0,
      })
   }),
});

export const { useGetUserQuery, useGetProfileQuery, useGetNotificationsQuery } = userSlice;
