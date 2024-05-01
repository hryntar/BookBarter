import { IBooksResponse } from "@/widgets/Books/model/books.interface";
import { User } from "@/widgets/Books/ui/User";
import { Chip, Image } from "@nextui-org/react"; 
import { Link } from "react-router-dom";

const ProfileBook = ({ id, title, year, publishedBy, price, genres, image, user, author}: IBooksResponse) => {
   
   console.log(user)
   
   return (
      <article className="bg-primary/5 border border-primary rounded-2xl overflow-hidden shadow-3xl flex max-w-md">
         <div>
            <Image width={150} height={200} alt="NextUI hero Image" src={`data:image/webp;base64,${image}`} />
         </div>
         <div className="flex flex-col justify-between p-3 w-full">
            <Link to={"/book/" + id}>
               <div>
                  <h3 className="font-bold leading-tight text-[16px]">{title}</h3>
                  <div className="mt-1">
                     <p className="text-sm">{author}</p>
                     <p className="text-sm">
                        {year}, {publishedBy}
                     </p>
                  </div>
                  <div className="space-x-2 mt-1">
                     {genres.map((genre) => (
                        <Chip color="primary" size="sm" radius="sm" variant="bordered" key={genre}>
                           {genre}
                        </Chip>
                     ))}
                  </div>
               </div>
            </Link>
            <div className="flex justify-between items-center gap-x-3 mt-4">
               <User {...user} />
               <div className="flex gap-x-1 relative z-50 items-center">
                  <div className="font-bold w-[40px] h-[40px] flex items-center justify-center border border-primary rounded-2xl bg-primary/10">
                     {price}
                  </div>
               </div>
            </div>
         </div>
      </article>
   );
};

export default ProfileBook;
