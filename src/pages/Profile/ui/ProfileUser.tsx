import { useAppDispatch } from "@/app/appStore";
import { setCredentials } from "@/features/auth";
import { useLogoutMutation } from "@/features/auth/api/logout.api";
import { Rating } from "@/shared/ui";
import { Avatar, Button } from "@nextui-org/react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProfileUserProps {
   login: string,
   image: string | null,
   email: string,
   phone: string,
   rating: number, 
}

const ProfileUser = ({ ...user }: ProfileUserProps) => {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const [logout] = useLogoutMutation();

   const signOut = async () => {
      await logout().unwrap();
      dispatch(setCredentials({ roles: [], accessToken: null }));
      navigate("/welcome");
   };

   return (
      <div className="px-20">
         <article className="flex items-center justify-between py-5">
            <div className="flex items-center gap-x-2 py-5">
               <Avatar className="mt-2 w-[100px] h-[100px]" src={user.image ? `data:image/webp;base64,${user.image}` : undefined} />
               <div>
                  <h2 className="text-[40px]">{user.login}</h2>
                  <Rating value={user.rating} />
               </div>
            </div>
            <Button isIconOnly variant="bordered" size="lg" color="danger" onClick={signOut}><LogOut /></Button>
         </article>
         <ul className="pb-5">
            <li>Телефон: {user.phone}</li>
            <li>Email: {user.email}</li>
         </ul>
      </div>
   );
};

export default ProfileUser;
