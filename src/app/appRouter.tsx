import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout";
import { RegistrationPage } from "@/pages/Registration";
import { LoginPage } from "@/pages/Login";
import { Welcome } from "@/pages/Welcome";
import { Home, Missing, Unauthorized } from "@/pages/Home";
import { PersistLogin, RequireAuth } from "@/features/auth";
import { Profile } from "@/pages/Profile";
import { Wishlist } from "@/pages/Wishlist/ui/Wishlist";
import { Publish } from "@/pages/Publish";
import { Requests } from "@/pages/Requests";

export enum Role {
   User = 2001, 
}

export const router = createBrowserRouter([
   {
      path: "/",
      element: <BaseLayout />,
      children: [
         {
            path: "registration",
            element: <RegistrationPage />,
         },
         {
            path: "login",
            element: <LoginPage />,
         },
         {
            path: "welcome",
            element: <Welcome />,
         },
         {
            path: "unauthorized",
            element: <Unauthorized />,
         },
         {
            element: <PersistLogin />,
            children: [
               {
                  element: <RequireAuth allowedRoles={[Role.User]} />,
                  children: [
                     {
                        path: "/",
                        element: <Home />,
                     },
                  ],
               },
               {
                  element: <RequireAuth allowedRoles={[Role.User]} />,
                  children: [
                     {
                        path: "profile",
                        element: <Profile />,
                     },
                  ],
               },
               {
                  element: <RequireAuth allowedRoles={[Role.User]} />,
                  children: [
                     {
                        path: "wishlist",
                        element: <Wishlist />,
                     },
                  ],
               },
               {
                  element: <RequireAuth allowedRoles={[Role.User]} />,
                  children: [
                     {
                        path: "publish",
                        element: <Publish />,
                     },
                  ],
               },
               {
                  element: <RequireAuth allowedRoles={[Role.User]} />,
                  children: [
                     {
                        path: "requests",
                        element: <Requests />,
                     },
                  ],
               },
            ],
         },
         {
            path: "*",
            element: <Missing />,
         },
      ],
   },
]);
