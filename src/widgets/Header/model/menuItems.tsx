import { Bell, BookHeart, BookPlus } from "lucide-react";

export interface IItem {
   description: string;
   icon: React.JSX.Element;
   link: string;
}

export const menuItems: IItem[] = [
   {
      description: "Сповіщення",
      icon: <Bell size={24} strokeWidth={1.5} />,
      link: "/requests",
   },
   {
      description: "Опублікувати книгу",
      icon: <BookPlus size={24} strokeWidth={1.5} />,
      link: "/publish",
   },
   {
      description: "Обрані книги",
      icon: <BookHeart size={24} strokeWidth={1.5} />,
      link: "/wishlist",
   },
];
