import { Link } from "react-router-dom";
import { IBooksResponse } from "../model/books.interface";
import { Button, Chip, Image } from "@nextui-org/react";
import { User } from "./User";
import { Heart } from "lucide-react";
import { useAddToWishListMutation, useDeleteFromWishListMutation } from "../api/books.api";
import { useEffect, useState } from "react";

export const BookItem = ({ ...book }: IBooksResponse) => { 
   const [addToWishList] = useAddToWishListMutation();
   const [deleteFromWishList] = useDeleteFromWishListMutation();
   const [isFavorite, setIsFavorite] = useState(false);

   useEffect(() => {
      
      const favorites = JSON.parse(localStorage.getItem("favorites") || '[]');
      
      setIsFavorite(favorites.includes(book.id));
   }, [book.id]);

   async function onFavoriteClick() {
      try {
         const favorites = JSON.parse(localStorage.getItem("favorites") || '[]');
         if (favorites.includes(book.id)) {
            const newFavorites = favorites.filter((fav: number) => fav !== book.id);
            await deleteFromWishList(book.id).unwrap(); 
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
            setIsFavorite(false);
         } else {
            await addToWishList(book.id).unwrap(); 
            favorites.push(book.id);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            setIsFavorite(true);
         }
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <article className="bg-primary/5 border border-primary rounded-2xl overflow-hidden shadow-3xl flex max-w-md">
         <div>
            <Image width={150} height={200} alt="NextUI hero Image" src={`data:image/webp;base64,${book.image}`} />
         </div>
         <div className="flex flex-col justify-between p-3 w-full">
            <Link to={"/book/" + book.id}>
               <div>
                  <h3 className="font-bold leading-tight text-[16px]">{book.title}</h3>
                  <div className="mt-1">
                     <p className="text-sm">{book.author}</p>
                     <p className="text-sm">
                        {book.year}, {book.publishedBy}
                     </p>
                  </div>
                  <div className="space-x-2 mt-1">
                     {book.genres.map((genre) => (
                        <Chip color="primary" size="sm" radius="sm" variant="bordered" key={genre}>
                           {genre}
                        </Chip>
                     ))}
                  </div>
               </div>
            </Link>
            <div className="flex justify-between items-center gap-x-3 mt-4">
               <User {...book.user} />
               <div className="flex gap-x-1 relative z-50 items-center">
                  <Button isIconOnly onClick={onFavoriteClick} variant="light" color="primary" className="rounded-full">
                     <Heart fill={isFavorite ? "#66FCF1" : undefined} color="#66FCF1" />
                  </Button>
                  <div className="font-bold w-[40px] h-[40px] flex items-center justify-center border border-primary rounded-2xl bg-primary/10">
                     {book.price}
                  </div>
               </div>
            </div>
         </div>
      </article>
   );
};
