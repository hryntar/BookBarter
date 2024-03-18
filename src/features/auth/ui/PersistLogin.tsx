import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "@nextui-org/react";
import { selectCurrentToken, setCredentials } from "..";
import { refreshSlice } from "../api/refresh.api";
import { useAppDispatch } from "@/app/appStore";
import useLocalStorage from "@/shared/hooks/useLocalStorage";

const PersistLogin = () => {
   const [isLoading, setIsLoading] = useState(true);
   const token = useSelector(selectCurrentToken);
   const [persist] = useLocalStorage("persist", false);
   const [trigger] = refreshSlice.endpoints.refresh.useLazyQuery();
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   useEffect(() => {
      let isMounted = true;

      const verifyRefreshToken = async () => {
         try {
            const response = await trigger().unwrap();
            dispatch(
               setCredentials({
                  accessToken: response.accessToken,
                  roles: response.roles,
               })
            );
         } catch (error) {
            console.error(error);
            navigate("/login");
         } finally {
            isMounted && setIsLoading(false);
         }
      };

      !token && persist ? verifyRefreshToken() : setIsLoading(false);
      return () => {
         isMounted = false;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      console.log(`isLoading: ${isLoading}`);
      console.log(`aT: ${JSON.stringify(token)}`);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isLoading]);
   return <>{!persist ? <Outlet /> : isLoading ? <Spinner label="Loading..." color="primary"></Spinner> : <Outlet />}</>;
};

export default PersistLogin;
