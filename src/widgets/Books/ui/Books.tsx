import { Spinner } from "@nextui-org/react";
import { useGetBooksQuery } from "../api/books.api";
import { BookItem } from "./BookItem";

export const Books = () => {
   const { data, isLoading } = useGetBooksQuery();

   return isLoading ? (
      <Spinner size="lg" className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]" color="primary"></Spinner>
   ) : (
      <section className="mt-[80px] px-10 mx-auto">
         <div className="grid grid-cols-3 gap-y-10">
            {data?.map((book) => (
               <BookItem key={book.id} {...book} />
            ))}
         </div>
      </section>
   );
};
