import { IBooksResponse } from "../model/books.interface";
import booksApi from "../model/booksApi";

export const booksSlice = booksApi.injectEndpoints({
   endpoints: (builder) => ({
      getBooks: builder.query<IBooksResponse[], void>({
         query: () => "/books",
         keepUnusedDataFor: 5,
      }),
   }),
});

export const { useGetBooksQuery } = booksSlice;
