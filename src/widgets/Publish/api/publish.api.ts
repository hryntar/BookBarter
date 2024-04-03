import booksApi from "../model/booksApi";
import { IBook } from "../model/book.interface";

export const publishSlice = booksApi.injectEndpoints({
   endpoints: (builder) => ({
      publish: builder.mutation<void, IBook>({
         query: (bookData) => ({
            url: "api/book/publish",
            method: "POST",
            body: { ...bookData },
         }),
      }),
   }),
});

export const { usePublishMutation } = publishSlice;
