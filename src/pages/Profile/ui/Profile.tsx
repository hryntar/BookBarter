import { Spinner } from "@nextui-org/react"; 
import { useGetProfileQuery } from "@/widgets/Books/api/user.api";
import ProfileBook from "./ProfileBook";
import ProfileUser from "./ProfileUser";

export const Profile = () => {


   const {data, isLoading} = useGetProfileQuery();
   

   return isLoading ? (
      <Spinner size="lg" className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]" color="primary"></Spinner>
   ) : (
      <section className="mt-[80px] max-sm:mt-[20px] sm:px-10 mx-auto"> 
         {data?.user ? (
            <ProfileUser {...data.user} /> 
         ): null}
         <h2 className="font-semibold text-2xl my-5">Опубліковані книжки</h2>
         <div className="flex flex-col items-center">
            <div className="grid grid-cols-3 gap-10 max-2xl:grid-cols-2 max-lg:grid-cols-1">
               {data && data?.books.map((book) => (
                  <ProfileBook title={book.title} description={book.description} author={book.author} image={book.image} genres={book.genres} id={book.id} price={book.price} publishedBy={book.publishedBy} year={book.year} user={data.user} />
               ))}
            </div>
         </div>
      </section>
   );
};
