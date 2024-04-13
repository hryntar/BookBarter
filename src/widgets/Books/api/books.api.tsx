import { baseApi } from "@/features/auth";
import { IBooksResponse } from "../model/books.interface";

export const booksSlice = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getBooks: builder.query<IBooksResponse[], void>({
         query: () => "api/book/get-all",
         keepUnusedDataFor: 5,
      }),
   }),
});

export const { useGetBooksQuery } = booksSlice;
