import React from "react";
import ReactDOM from "react-dom/client";
import "@/app/styles/index.css";
import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";
import { store } from "./appStore.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./appRouter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <Provider store={store}>
         <NextUIProvider>
            <RouterProvider router={router} />
         </NextUIProvider>
      </Provider>
   </React.StrictMode>
);
