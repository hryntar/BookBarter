import React from "react";
import ReactDOM from "react-dom/client";
import "@/app/styles/index.css";
import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";
import { BaseLayout } from "./layouts/BaseLayout.tsx";
import { store } from "./appStore.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <Provider store={store}>
         <NextUIProvider>
            <BaseLayout />
         </NextUIProvider>
      </Provider>
   </React.StrictMode>
);
