import { btnAttribs, inputAttribs, useImageToBlob, useImageUpload } from "@/shared";
import { Input, Textarea, Image, Button, Chip, Select, SelectItem } from "@nextui-org/react";
import { usePublishMutation } from "../api/publish.api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "@/shared/ui";
import { GenreValue } from "../model/book.interface";
import { genresData } from "../model/genres";

export const Publish = () => {
   const { selectedFile, preview, onSelectFile } = useImageUpload();
   const { blob } = useImageToBlob(selectedFile);
   const [errMsg, setErrMsg] = useState("");
   const navigate = useNavigate();
   const [publish, { isLoading }] = usePublishMutation();

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const title = formData.get("title") as string;
      const author = formData.get("author") as string;
      const genres = formData.getAll("genres") as GenreValue[]; 
      const price = Number(formData.get("price")); 
      const year = Number(formData.get("year"));
      const description = formData.get("description") as string;
      const publishedBy = formData.get("publishedBy") as string;
      
      try {
         await publish({ title, author, year, image: blob, description, publishedBy, price, genres}).unwrap();
         navigate("/");
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
         if (!err?.originalStatus) {
            setErrMsg("Сервер не відповідає( Спробуйте ще раз");
         } else if (err.originalStatus === 400) {
            setErrMsg("Потрібно заповнити всі поля");
         } else if (err.originalStatus === 401) {
            setErrMsg("Неправильні дані");
         } else {
            setErrMsg("Виникла помилка( Спробуйте ще раз");
         }
      }
   };

   return (
      <section className="sm:min-w-[800px]  max-sm:w-full px-10 py-10 max-sm:px-5 border-1 shadow-3xl border-primary rounded-3xl">
         <h1 className="font-bold text-primary text-3xl text-center mb-3">Опублікувати книгу</h1>
         <form className="grid gap-y-2" onSubmit={handleSubmit}>
            <div className="mt-5 m-auto text-center">
               <Image src={preview} className={selectedFile ? "w-[200px] h-[300px]" : ""} />
               <Button variant="bordered" className="mt-5" color="primary" onClick={() => document.getElementById("fileInput")?.click()}>
                  Вибрати фото
               </Button>
               <input id="fileInput" type="file" accept="image/*" onChange={onSelectFile} style={{ display: "none" }} />
            </div>
            <Input {...inputAttribs} type="text" name="title" label="Назва" classNames={{ label: "after:content-['']" }} />
            <Input {...inputAttribs} type="text" name="author" label="Автор" classNames={{ label: "after:content-['']" }} />
            <Input
               {...inputAttribs}
               type="number"
               name="year"
               label="Рік видання"
               classNames={{ label: "after:content-['']" }}
               aria-describedby="uidnote"
            />
            <Input
               {...inputAttribs}
               type="text"
               name="publishedBy"
               label="Видавництво"
               classNames={{ label: "after:content-['']" }}
               aria-describedby="uidnote"
            />
            <Input
               {...inputAttribs}
               type="number"
               name="price"
               label="Ціна"
               classNames={{ label: "after:content-['']" }}
               aria-describedby="uidnote"
            />
            <Select
               items={genresData}
               variant="underlined"
               color="primary"
               isMultiline={true}
               selectionMode="multiple"
               size="lg"
               radius="lg"
               placeholder="Жанр"
               name="genres"
               isRequired
               classNames={{
                  trigger: "min-h-unit-12 py-2",
                  popoverContent: "bg-background"
               }}
               className="mt-2"
               renderValue={(items) => {
                  return (
                     <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                           <Chip color="primary" radius="sm" variant="bordered" key={item.key}>{item.rendered}</Chip>
                        ))}
                     </div>
                  );
               }}
            >
               {(genre) => (
                  <SelectItem key={genre.value} textValue={genre.value}>
                     <div className="flex gap-2 items-center">{genre.label}</div>
                  </SelectItem>
               )}
            </Select>
            <Textarea
               size="sm"
               radius="lg"
               classNames={{ label: "after:content-['']" }}
               className="mt-7"
               name="description"
               label="Короткий опис книги"
               variant="bordered"
               color="primary"
               labelPlacement="inside"
               isRequired
            />
            <Button className="mt-5" {...btnAttribs} fullWidth isLoading={isLoading} type="submit">
               Опублікувати
            </Button> 
         </form>
         <Toaster show={Boolean(errMsg)} msg={errMsg} />
      </section>
   );
};
