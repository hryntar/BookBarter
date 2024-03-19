import { Button } from "@nextui-org/react";
import { useAppDispatch } from "@/app/appStore";
import { setCredentials } from "@/features/auth";
import { logoutSlice } from "@/features/auth/api/logout.api";
import { Link } from "react-router-dom";

export const Profile = () => {
   // const navigate = useNavigate();
   const dispatch = useAppDispatch();

   const signOut = async () => {
      await dispatch(logoutSlice.endpoints.logout.initiate()).unwrap();
      dispatch(setCredentials({ roles: [], accessToken: null }));
      // navigate("/welcome");
   };

   return (
      <>
         <div>Profile</div>
         <Link className="hover:text-primary transition font-semibold" to="/">Home</Link>
         <Button color="danger" variant="ghost" onClick={signOut} className="font-semibold">
            Sign Out
         </Button>
      </>
   );
};
