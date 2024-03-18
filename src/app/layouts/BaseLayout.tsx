import { Outlet } from "react-router-dom";

export const BaseLayout = () => {
   return (
      <main className="h-[100vh] flex items-center justify-center px-3.5">
         <Outlet /> 
      </main>
   );
};
