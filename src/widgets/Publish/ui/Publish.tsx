import { btnAttribs, inputAttribs, useImageToBlob, useImageUpload } from "@/shared";
import { Input, Textarea, Image, Button } from "@nextui-org/react";
import { usePublishMutation } from "../api/publish.api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "@/shared/ui";

export const Publish = () => {
   const { selectedFile, preview, onSelectFile } = useImageUpload();
   const { blob } = useImageToBlob(selectedFile); 
   const [errMsg, setErrMsg] = useState("");
   const navigate = useNavigate(); 
   const [publish, { isLoading }] = usePublishMutation();

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const title = formData.get('title') as string;
      const author = formData.get('author') as string;
      const year = Number(formData.get('year'));
      const description = formData.get('description') as string;
      const publishedBy = formData.get('publishedBy') as string;
      try {  
         await publish({ title, author, year, image: blob, description, publishedBy}).unwrap(); 
         navigate("/");
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
         if (!err?.originalStatus) { 
            setErrMsg("Сервер не відповідає( Спробуйте ще раз");
         } else if (err.originalStatus === 400) {
            setErrMsg("Потрібно заповнити всі поля");
         } else if (err.originalStatus === 401) {
            setErrMsg("Неправильний логін або пароль");
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
               <Button className="mt-5" color="primary" onClick={() => document.getElementById("fileInput")?.click()}>
                  Вибрати фото
               </Button>
               <input id="fileInput" type="file" accept="image/*" onChange={onSelectFile} style={{ display: "none" }} />
            </div>
            <Input
               {...inputAttribs}
               type="text"
               name="title"
               label="Назва"
               classNames={{ label: "after:content-['']" }}
            />
            <Input
               {...inputAttribs}
               type="text"
               name="author"
               label="Автор"
               classNames={{ label: "after:content-['']" }}
            />
            <Input
               {...inputAttribs}
               type="text"
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
            <Textarea
               classNames={{ label: "after:content-['']" }}
               className="mt-7"
               name="description"
               label="Короткий опис книги"
               variant="bordered"
               color="primary"
               labelPlacement="inside"
               isRequired
            />
            <Button 
               className="mt-5"
               {...btnAttribs}
               fullWidth
               isLoading={isLoading}
               type="submit"
            >
               Опублікувати
            </Button>
            {/* ЖАНРИ */}
            {/* ЦІНА */}
         </form>
         <Toaster show={Boolean(errMsg)} msg={errMsg} /> 
      </section>
   );
};
