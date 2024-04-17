import { baseApi } from "@/features/auth";
import { IBooksResponse } from "../model/books.interface";
import { IPurchase } from "@/pages/BookPage/model/purchase.interface";

export const booksSlice = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getBooks: builder.query<IBooksResponse[], void>({
         query: () => "api/book/get-all",
         // query: () => "books",
         keepUnusedDataFor: 0,
      }),
      getBook: builder.query<IBooksResponse, string>({
         query: (id) => `api/book/get/${id}`,
         // query: (id) => `books/${id}`,
      }), 
      buyBook: builder.mutation<void, IPurchase>({
         query: (args) => ({
            method: "POST",
            url: "api/purchase/buy",
            body: { ...args }
         })
      })
   }),
});

export const { useGetBooksQuery, useGetBookQuery, useBuyBookMutation } = booksSlice;
