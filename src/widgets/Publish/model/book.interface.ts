export interface IBook {
   title: string;
   author: string;
   year: string;
   genres: GenreValue[];
   description: string;
   publishedBy: string;
   price: string;
   image: Blob | null;
}

export interface Genre {
   label: GenreLabel;
   value: GenreValue;
}

type GenreLabel = "Роман" | "Поезія" | "Фантастика" | "Фентезі" | "Детектив" | "Біографія" | "Історичний" | "Наукова література" | "Художня література" | "Дитяча література";

export type GenreValue = "NOVEL" | "POETRY" | "FANTASY" | "FICTION" | "DETECTIVE" | "BIOGRAPHY" | "HISTORICAL" | "SCIENTIFIC" | "SCI-FI" | "CHILDREN";