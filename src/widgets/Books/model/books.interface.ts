import { GenreValue } from "@/widgets/Publish/model/book.interface"

export interface IBooksResponse {
   id: number,
   title: string,
   author: string,
   image: Image,
   genres: GenreValue[],
   description: string,
   year: string,
   publishedBy: string,
   price: string,
   user: {
      login: string,
      email: string,
      rating: number,
      phone: string,
      image: Image
   }
}

type Image = string | null