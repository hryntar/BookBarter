import { Rating } from "@/shared/ui";
import { Avatar } from "@nextui-org/react";

interface IUserProps {
   image: null | string;
   login: string;
   rating: number;
}

export const User = ({ ...user }: IUserProps) => {
   return (
      <div className="flex item-center gap-x-2">
         <Avatar className="mt-1" src={user.image ? `data:image/jpeg;base64,${user.image}` : undefined} />
         <div>
            <h4>{user.login}</h4>
            <Rating value={user.rating} />
         </div>
      </div>
   );
};
