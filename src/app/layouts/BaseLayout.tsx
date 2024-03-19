import { Outlet } from "react-router-dom";

export const BaseLayout = () => {
   return (
      <main className="h-[100vh] px-3.5 drop-shadow-2xl backdrop-opacity-5 backdrop-blur-[100px]">
         <Outlet /> 
      </main>
   );
};
