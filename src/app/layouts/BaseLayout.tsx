import { Outlet } from "react-router-dom";

export const BaseLayout = () => {
   return (
      <main className="min-h-[100vh] px-3.5 drop-shadow-2xl backdrop-opacity-10 backdrop-blur-[100px] overflow-hidden">
         <Outlet /> 
      </main>
   );
};
