import { Spinner } from "@nextui-org/react";
import { useGetBooksQuery } from "../api/books.api";
import { BookItem } from "./BookItem";

export const Books = () => {
   const { data, isLoading } = useGetBooksQuery();

   return isLoading ? (
      <Spinner size="lg" className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]" color="primary"></Spinner>
   ) : (
      <section className="mt-[80px] max-sm:mt-[20px] sm:px-10 mx-auto">
         <div className="flex flex-col items-center">
            <div className="grid grid-cols-3 gap-10 max-2xl:grid-cols-2 max-lg:grid-cols-1">
               {data?.map((book) => (
                  <BookItem key={book.id} {...book} />
               ))}
            </div>
         </div>
      </section>
   );
};
