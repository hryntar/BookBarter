import React from "react";
import ReactDOM from "react-dom/client";
import "@/app/styles/index.css";
import { Provider } from "react-redux";
import { BaseLayout } from "./layouts/BaseLayout.tsx";
import { store } from "./appStore.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <Provider store={store}>
         <BaseLayout />
      </Provider>
   </React.StrictMode>
);
