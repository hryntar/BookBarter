import { Link } from "react-router-dom";
import { IBooksResponse } from "../model/books.interface";
import { Chip, Image } from "@nextui-org/react";
import { User } from "./User";

export const BookItem = ({ ...book }: IBooksResponse) => { 

   return (
      <article className="bg-primary/5 border border-primary rounded-2xl overflow-hidden shadow-3xl flex max-w-md">
         <div>
            <Image width={150} height={200} alt="NextUI hero Image" src={`data:image/jpeg;base64,${book.image}`} />
            {/* <Image width={10} height={300} alt="NextUI hero Image" src={`/missingbook.jpg`} /> */}
         </div>
         <Link to={"/book/" + book.id} className="flex flex-col justify-between p-3 w-full">
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
            <div className="flex justify-between items-center gap-x-3">
               <User {...book.user} />
               <div className="font-bold w-[40px] h-[40px] flex items-center justify-center border border-primary rounded-2xl bg-primary/10">
                  {book.price}
               </div>
            </div>
         </Link>
      </article>
   );
};
