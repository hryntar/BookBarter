import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "@nextui-org/react";
import { selectCurrentToken, setCredentials } from "..";
import { useAppDispatch } from "@/app/appStore";
import { useLocalStorage } from "@/shared";
import { useRefreshMutation } from "../api/refresh.api";

const PersistLogin = () => {
   const [isLoading, setIsLoading] = useState(true);
   const token = useSelector(selectCurrentToken);
   const [persist] = useLocalStorage("persist", false);
   const [trigger] = useRefreshMutation();
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
            navigate("/welcome");
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
   return (
      <>
         {!persist ? (
            <Outlet />
         ) : isLoading ? (
            <Spinner size="lg" className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]" color="primary"></Spinner>
         ) : (
            <Outlet />
         )}
      </>
   );
};

export default PersistLogin;
