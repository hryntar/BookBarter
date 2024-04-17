import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Button, Chip, Spinner } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { Rating } from "@/shared/ui";
import { Header } from "@/widgets/Header";
import { useBuyBookMutation, useGetBookQuery } from "@/widgets/Books/api/books.api";
import toast, { Toaster } from "react-hot-toast";

const BookPage = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const { data: book, isLoading } = useGetBookQuery(id || "");
   const [buyBook, { isLoading: isBuyLoading, error }] = useBuyBookMutation();

   async function handleBuyBook() {
      try {
         await buyBook({ bookId: book?.id ?? 0, sellerEmail: book?.user.email || "" }).unwrap();
         toast.success("Запит на купівлю відправлений", { position: "top-center" });
         await new Promise((resolve) => setTimeout(resolve, 1500));
         navigate("/");
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
         console.log("error", error);
         toast.error("Виникла помилка", {
            position: "top-center",
            style: {
               borderRadius: "10px", 
               background: "#0B0C10",
               color: "#fff",
            },
         });
         // 404 недостатньо грошей
         // if (!err?.originalStatus) {
         //    setErrMsg("Сервер не відповідає( Спробуйте ще раз");
         // } else if (err.originalStatus === 400) {
         //    setErrMsg("Потрібно заповнити всі поля");
         // } else if (err.originalStatus === 401) {
         //    setErrMsg("Неправильний логін або пароль");
         // } else {
         //    setErrMsg("Виникла помилка( Спробуйте ще раз");
         // }
      }
   }

   
      return (
         <>
            <Header />
            {isLoading ? (
               <Spinner size="lg" className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]" color="primary"></Spinner>
            ) : (
               <section className="my-[80px] max-sm:mt-[20px] sm:px-10 mx-auto">
                  <div className="flex gap-x-[50px]">
                     <Image src={`data:image/jpeg;base64,${book?.image}`} width={300} height={500} alt="Book" />
                     <div className="max-w-[800px]">
                        <h1 className="font-bold text-[42px] leading-tight">{book?.title}</h1>
                        <div className="text-xl mt-10">
                           <div className="mb-10 space-y-[10px]">
                              <p>
                                 <span className="font-semibold text-primary">Автор:</span> {book?.author}
                              </p>
                              <p>
                                 <span className="font-semibold text-primary">Рік видання:</span> {book?.year}
                              </p>
                              <p>
                                 <span className="font-semibold text-primary">Видавництво:</span> {book?.publishedBy}
                              </p>
                           </div>
                           <div className="space-x-5">
                              {book?.genres.map((genre) => (
                                 <Chip color="primary" size="lg" radius="sm" variant="bordered" key={genre}>
                                    {genre}
                                 </Chip>
                              ))}
                           </div>
                           <div className="flex w-full items-center justify-between mt-20">
                              <div className="flex items-center gap-x-2 ">
                                 <Avatar size="lg" className="mt-1" src={`data:image/jpeg;base64,${book?.user.image}`} />
                                 <div>
                                    <h4 className="text-2xl">{book?.user.login}</h4>
                                    <Rating value={book?.user.rating || 0} />
                                 </div>
                              </div>{" "}
                              <Button size="lg" color="primary" onClick={handleBuyBook} isLoading={isBuyLoading}>
                                 Купити ${book?.price}
                              </Button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <p className="mt-10 max-w-[1200px]">{book?.description}</p>
               </section>
            )}
            <Toaster />
         </>
      ); 
};

export default BookPage;
