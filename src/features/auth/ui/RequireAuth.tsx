import { RootState } from "@/app/appStore";
import { FC } from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth: FC<{ allowedRoles: number[] }> = ({ allowedRoles }) => {
   const auth = useSelector((state: RootState) => state.auth);
   console.log(auth?.roles?.find((role) => allowedRoles?.includes(role)));

   const location = useLocation();

   return (
      <>
         {!auth.accessToken ? (
            <Navigate to="/welcome" state={{ from: location }} replace />
         ) : !auth.roles ? (
            <Navigate to="/unauthorized" state={{ from: location }} replace />
         ) : auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
            <Outlet />
         ) : auth?.accessToken ? (
            <Navigate to="/unauthorized" state={{ from: location }} replace />
         ) : (
            <Navigate to="/welcome" state={{ from: location }} replace />
         )}
      </>
   );
};

export default RequireAuth;
