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
   user: UserType;
}

export type UserType = {
   login: string,
   email: string,
   rating: number,
   phone: string,
   image: Image
}

type Image = string | null