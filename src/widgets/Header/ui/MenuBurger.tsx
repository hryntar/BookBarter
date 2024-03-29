import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { menuItems } from "../model/menuItems";
import { Link } from "react-router-dom";

export const MenuBurger = () => {
   return (
      <NavbarMenu className="py-20 font-semibold text-primary space-y-10 text-center">
         {menuItems.map((item, index) => (
            <NavbarMenuItem key={index} className="mr-1">
               <Link className="flex justify-center flex-col items-center" to={item.link}>
                  {item.icon}
                  {item.description}
               </Link>
            </NavbarMenuItem>
         ))}
      </NavbarMenu>
   );
};
