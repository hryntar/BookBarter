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
            body: { ...args },
         }),
      }),
      addToWishList: builder.mutation<void, number>({
         query: (id: number) => ({
         // query: () => ({
            method: "POST",
            url: `api/wishlist/add/${id}`
            // url: `wishlist`,
         }),
      }),
      deleteFromWishList: builder.mutation<void, number>({
         query: (id: number) => ({
            method: "DELETE",
            url: `api/wishlist/delete/${id}`
            // url: `wishlist/${id}`,
         }),
      }),
      getWishlist: builder.query<IBooksResponse[], void>({
         query: () => `api/wishlist`,
         // query: () => `wishlist`,
         keepUnusedDataFor: 0,
      }),
   }),
});

export const { useGetBooksQuery, useGetBookQuery, useBuyBookMutation, useAddToWishListMutation, useGetWishlistQuery, useDeleteFromWishListMutation } =
   booksSlice;
