import {
   Avatar,
   Button,
   Dropdown,
   DropdownItem,
   DropdownMenu,
   DropdownTrigger,
   Navbar,
   NavbarBrand,
   NavbarContent,
   NavbarItem,
   NavbarMenu,
   NavbarMenuItem,
   NavbarMenuToggle,
   Tooltip,
} from "@nextui-org/react";
import { Bell, BookHeart, BookPlus, Wallet } from "lucide-react";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <>
         <Navbar classNames={{ base: "bg-transparent", wrapper: "sm:pt-10 pt-2 max-sm:px-0" }} maxWidth="2xl" onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
               <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
               <NavbarBrand>
                  <img className="sm:w-[150px] w-[110px]" width={150} src="/logo.svg" alt="BookBarter" />
               </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="end">
               <NavbarContent justify="end" className="max-sm:hidden">
                  <NavbarItem className="mr-1">
                     <Tooltip showArrow color="primary" content="Сповіщення">
                        <Button variant="light" radius="full" color="primary" isIconOnly aria-label="Notifications">
                           <Bell size={24} strokeWidth={1.5} />
                        </Button>
                     </Tooltip>
                  </NavbarItem>
                  <NavbarItem className="mr-1">
                     <Tooltip showArrow color="primary" content="Опублікувати книгу">
                        <Button variant="light" radius="full" color="primary" isIconOnly aria-label="Publish book">
                           <BookPlus size={24} strokeWidth={1.5} />
                        </Button>
                     </Tooltip>
                  </NavbarItem>
                  <NavbarItem className="mr-5">
                     <Tooltip showArrow color="primary" content="Обрані книги">
                        <Button variant="light" radius="full" color="primary" isIconOnly aria-label="Wishlist">
                           <BookHeart size={24} strokeWidth={1.5} />
                        </Button>
                     </Tooltip>
                  </NavbarItem>
               </NavbarContent>
               <Dropdown classNames={{ content: "bg-primary/5 shadow-3xl border-1 border-primary rounded-3xl " }}>
                  <DropdownTrigger>
                     <div className="flex items-center cursor-pointer max-sm:gap-2 gap-4 bg-primary/5 shadow-3xl border-1 border-primary max-sm:p-1  max-sm:pr-[5px] max-sm:py-[5px]  p-2 rounded-full">
                        <p className="flex gap-1 items-center text-primary ml-2">
                           <span>10 </span> <Wallet size={20} strokeWidth={1.5} />
                        </p>
                        <Avatar color="primary" isBordered src="" className="max-sm:w-[35px] max-sm:h-[35px] w-[40px] h-[40px]" />
                     </div>
                  </DropdownTrigger>
                  <DropdownMenu variant="shadow" color="primary" aria-label="Profile Actions">
                     <DropdownItem showDivider={true} key="info">
                        <p className="font-bold">Ви увійшли як</p>
                        <p className="font-bold">coolman0907</p>
                     </DropdownItem>
                     <DropdownItem key="profile">Профіль</DropdownItem>
                     <DropdownItem key="logout" className="text-danger" color="danger">
                        Вийти
                     </DropdownItem>
                  </DropdownMenu>
               </Dropdown>
            </NavbarContent>
            <NavbarMenu className="py-20 font-semibold text-primary space-y-10 text-center">
               <NavbarMenuItem className="">
                  <Link className="flex justify-center text-xl flex-col items-center" to="/requests"><Bell size={30} strokeWidth={1.5} />Сповіщення</Link>
               </NavbarMenuItem>
               <NavbarMenuItem >
                  <Link className="flex justify-center text-xl flex-col items-center" to="/publish"><BookPlus size={30} strokeWidth={1.5} />Опублікувати книгу</Link>
               </NavbarMenuItem>
               <NavbarMenuItem >
                  <Link className="flex justify-center text-xl flex-col items-center" to="/wishlist"><BookHeart size={30} strokeWidth={1.5} />Обрані книги</Link>
               </NavbarMenuItem>
               
            </NavbarMenu>
         </Navbar>
         <div className="mt-[200px] grid place-content-center text-center">
            Тут будуть книги(
         </div>
         {/* <h1 className="font-bold text-primary text-3xl text-center mb-7">Home</h1>
         <nav className="grid gap-y-5 font-semibold mb-[100px]">
            <Link className="hover:text-primary transition" to="/profile">
               Profile
            </Link>
            <Link className="hover:text-primary transition" to="/wishlist">
               Wishlist
            </Link>
            <Link className="hover:text-primary transition" to="/publish">
               Add book
            </Link>
            <Link className="hover:text-primary transition" to="/requests">
               Requests
            </Link>
         </nav> */}
      </>
   );
};

export default Home;
