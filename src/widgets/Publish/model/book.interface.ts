export interface IBook {
   title: string;
   author: string;
   year: number;
   genres: GenreValue[];
   description: string;
   publishedBy: string;
   price: number;
   image: Blob | null;
}

export interface Genre {
   label: GenreLabel;
   value: GenreValue;
}

type GenreLabel = "Роман" | "Поезія" | "Фантастика" | "Фентезі" | "Детектив" | "Біографія" | "Історичний" | "Наукова література" | "Художня література" | "Дитяча література";

export type GenreValue = "novel" | "poetry" | "fantasy" | "fiction" | "detective" | "biography" | "historical" | "scientific" | "sci-fi" | "children";