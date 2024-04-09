import { baseApi } from "@/features/auth";
import { IBook } from "../model/book.interface";

export const publishSlice = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      publish: builder.mutation<void, IBook>({ 
         query: (bookData) => {
            const formData = new FormData(); 
            formData.append('title', bookData.title);
            formData.append('description', bookData.description);
            formData.append('author', bookData.author);
            formData.append('genres', bookData.genres.join()); 
            formData.append('image', bookData.image || '');
            formData.append('publishedBy', bookData.publishedBy);
            formData.append('price', bookData.price); 
            formData.append('year', bookData.year); 

            return {
               url: "api/book/publish",
               method: "POST",
               body: formData,
            }
         }, 
      }),
   }),
});

export const { usePublishMutation } = publishSlice;
