import { Badge, Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, Tooltip } from "@nextui-org/react"; 
import { useState } from "react";
import { MenuBurger } from "./MenuBurger";
import { Dropdown } from "./Dropdown";
import { menuItems } from "../model/menuItems";
import { useNavigate } from "react-router-dom";
import { Bell } from "lucide-react";
import { useGetUserQuery } from "@/widgets/Books/api/user.api";

export const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const navigate = useNavigate();
   const { data } = useGetUserQuery(); 

   return (
      <Navbar classNames={{ base: "bg-transparent", wrapper: "sm:pt-10 pt-2 max-sm:px-0" }} maxWidth="2xl" onMenuOpenChange={setIsMenuOpen}>
         <NavbarContent>
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
            <NavbarBrand>
               <img className="sm:w-[150px] w-[110px]" width={150} src="/logo.svg" alt="BookBarter" />
            </NavbarBrand>
         </NavbarContent>
         <NavbarContent justify="end">
            <NavbarContent justify="end" className="max-sm:hidden sm:mr-5">
               <NavbarItem className="mr-1">
                  <Badge isInvisible={!data?.notifications} variant="shadow" content="" shape="circle" color="danger" size="md">
                     <Tooltip showArrow color="primary" content={"Сповіщення"}>
                        <Button
                           onPress={() => navigate("/requests")}
                           variant="light"
                           radius="full"
                           color="primary"
                           isIconOnly
                           aria-label="Сповіщення"
                        >
                           <Bell size={24} strokeWidth={1.5} />
                        </Button>
                     </Tooltip>
                  </Badge>
               </NavbarItem>
               {menuItems.map((item, index) => (
                  <NavbarItem key={index} className="mr-1">
                     <Tooltip showArrow color="primary" content={item.description}>
                        <Button
                           onPress={() => navigate(item.link)}
                           variant="light"
                           radius="full"
                           color="primary"
                           isIconOnly
                           aria-label={item.description}
                        >
                           {item.icon}
                        </Button>
                     </Tooltip>
                  </NavbarItem>
               ))}
            </NavbarContent>
            <Dropdown user={data} />
         </NavbarContent>
         <MenuBurger />
      </Navbar>
   );
};
