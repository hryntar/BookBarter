import { IBooksResponse } from "./books.interface";

export interface IUser {
   login: string,
   image: string | null,
   email: string,
   bucks: number,
   phone: string,
   rating: number,
   notifications: boolean
}

export interface IProfile {
   login: string,
   image: string | null,
   email: string,
   bucks: number,
   phone: string,
   rating: number, 
   books: IBooksResponse[];
}