import { useRef, FC, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox, Button, Avatar, Badge } from "@nextui-org/react";
import { Toaster } from "@/shared/ui";
// import { useImageUpload, btnAttribs, useBase64 } from "@/shared";
// import { RegisterInitState, reducer, useRegisterMutation } from "@/features/auth";
import { RegisterInitState, reducer  } from "@/features/auth";
import { Pencil } from "lucide-react";
import { Inputs } from "./Inputs";
import { Success } from "./Success";
import { btnAttribs, useImageUpload } from "@/shared";

const Registration: FC = () => {
   const errRef = useRef<HTMLInputElement>(null);
   const [agree, setAgree] = useState(false);

   // const { selectedFile, preview, onSelectFile } = useImageUpload();
   const { preview, onSelectFile } = useImageUpload();
   // const image = useBase64(selectedFile);

   const [state, dispatch] = useReducer(reducer, RegisterInitState);

   // const [register, { isLoading }] = useRegisterMutation();
   const [isLoading, setIsLoading] = useState(false); 


   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try { 
         setIsLoading(true);
         // await register({ login: state.login, pwd: state.pwd, email: state.email, phone: state.phone, image }).unwrap();
         await new Promise((resolve) => setTimeout(resolve, 1000));
         setIsLoading(false);
         dispatch({ type: "SET_SUCCESS", payload: true });
         dispatch({ type: "SET_LOGIN", payload: "" });
         dispatch({ type: "SET_PWD", payload: "" });
         dispatch({ type: "SET_EMAIL", payload: "" });
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
         if (!err?.originalStatus) {
            dispatch({ type: "SET_ERR_MSG", payload: "Сервер не відповідає( Спробуйте ще раз" });
         } else if (err.originalStatus === 400) {
            dispatch({ type: "SET_ERR_MSG", payload: "Потрібно заповнити всі поля" });
         } else if (err.originalStatus === 401) {
            dispatch({ type: "SET_ERR_MSG", payload: "Такий користувач вже існує" });
         } else {
            dispatch({ type: "SET_ERR_MSG", payload: "Виникла помилка( Спробуйте ще раз" });
         }
         errRef.current?.focus();
      }
   };
   

   return (
      <>
         {state.success ? (
            <Success />
         ) : (
            <section className="sm:min-w-[600px] max-sm:w-full px-10 py-10 max-sm:px-5 border-1 shadow-3xl border-primary rounded-3xl">
               <h1 className="font-bold text-primary text-3xl text-center mb-7">Зареєструватись</h1>
               <div className="w-full grid place-content-center">
                  <Badge
                     placement="bottom-right"
                     onClick={() => document.getElementById("fileInput")?.click()}
                     color="primary"
                     content={<Pencil size={20} className="cursor-pointer" />}
                     size="sm"
                     className="w-[30px] h-[30px]"
                  >
                     <Avatar className="w-[70px] h-[70px]" src={preview} />
                  </Badge>
                  <input id="fileInput" type="file" accept="image/*" onChange={onSelectFile} style={{ display: "none" }} />
               </div>
               <form className="grid gap-y-2" onSubmit={handleSubmit}>
                  <Inputs state={state} dispatch={dispatch} />

                  <Checkbox className="mt-3 mb-[100px]" onChange={() => setAgree(!agree)}>
                     <span className="text-sm max-sm:text-[12px]">
                        Я погоджуюсь з <span className="text-primary font-semibold">умовами користування та правилами спільноти</span>
                     </span>
                  </Checkbox>

                  <Button
                     {...btnAttribs}
                     fullWidth
                     isLoading={isLoading}
                     type="submit"
                     isDisabled={!state.validLogin || !state.validPwd || !state.validMatch || !agree ? true : false}
                  >
                     Зареєструватись
                  </Button>
               </form>
               <div className="text-sm mt-10">
                  Вже зареєстровані?
                  <span className="text-primary font-semibold">
                     <Link to="/login"> Увійти</Link>
                  </span>
               </div>
            </section>
         )}
         <Toaster show={Boolean(state.errMsg)} msg={state.errMsg} />
      </>
   );
};

export default Registration;
