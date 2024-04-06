import { useGetBooksQuery } from "../api/books.api";
import { BookItem } from "./BookItem";

export const Books = () => {
   const { data } = useGetBooksQuery();

   return (
      <section className="mt-[80px] px-10 mx-auto">
         <div className="grid grid-cols-3 gap-y-10">
            {data?.map((book) => (
               <BookItem key={book.id} {...book} />
            ))}
         </div>
      </section>
   );
};
