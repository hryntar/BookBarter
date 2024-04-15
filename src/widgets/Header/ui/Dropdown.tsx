import { useGetUserQuery } from "@/widgets/Books/api/user.api";
import { Avatar, Dropdown as DropdownWrapper, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Dropdown = () => {
   const navigate = useNavigate();
   const {data} = useGetUserQuery();

   return (
      <DropdownWrapper classNames={{ content: "bg-background/80 shadow-3xl border-1 border-primary rounded-3xl " }}>
         <DropdownTrigger>
            <div className="flex items-center cursor-pointer max-sm:gap-2 gap-4 bg-primary/5 shadow-3xl border-1 border-primary max-sm:p-1  max-sm:pr-[5px] max-sm:py-[5px]  p-2 rounded-full">
               <p className="flex gap-1 items-center text-primary ml-2">
                  <span>{data?.buck}</span> <Wallet size={20} strokeWidth={1.5} />
               </p>
               <Avatar color="primary" isBordered src={data?.image ? `data:image/jpeg;base64,${data?.image}` : undefined} className="max-sm:w-[35px] max-sm:h-[35px] w-[40px] h-[40px]" />
            </div>
         </DropdownTrigger>
         <DropdownMenu variant="shadow" color="primary" aria-label="Profile Actions">
            <DropdownItem className="rounded-2xl" showDivider={true} key="info">
               <p className="font-bold">Ви увійшли як</p>
               <p className="font-bold">{data?.login}</p>
            </DropdownItem>
            <DropdownItem className="rounded-2xl" onPress={() => navigate("/profile")} key="profile">
               Профіль
            </DropdownItem>
            <DropdownItem className="rounded-2xl text-danger" color="danger">
               Вийти
            </DropdownItem>
         </DropdownMenu>
      </DropdownWrapper>
   );
};
