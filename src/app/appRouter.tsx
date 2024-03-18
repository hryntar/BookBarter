import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout";
import { Registration } from "@/pages/Registration";
import { Login } from "@/pages/Login";
import { LinkPage } from "@/pages/Welcome";
import { Home, Lounge, Missing, Unauthorized } from "@/pages/Home";
import { PersistLogin, RequireAuth } from "@/features/auth";
import { Admin } from "@/pages/Admin";

export enum Role {
   User = 2001,
   Admin = 5320,
   Editor = 1808,
}

export const router = createBrowserRouter([
   {
      path: "/",
      element: <BaseLayout />,
      children: [
         {
            path: "register",
            element: <Registration />,
         },
         {
            path: "login",
            element: <Login />,
         },
         {
            path: "linkpage",
            element: <LinkPage />,
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
                  element: <RequireAuth allowedRoles={[Role.Admin]} />,
                  children: [
                     {
                        path: "admin",
                        element: <Admin />,
                     },
                  ],
               },
               {
                  element: <RequireAuth allowedRoles={[Role.Editor]} />,
                  children: [
                     {
                        path: "editor",
                        element: <Admin />,
                     },
                  ],
               },
               {
                  element: <RequireAuth allowedRoles={[Role.Admin, Role.Editor]} />,
                  children: [
                     {
                        path: "lounge",
                        element: <Lounge />,
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
