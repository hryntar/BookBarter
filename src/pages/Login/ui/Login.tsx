import { useRef, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Input, Button, Checkbox } from "@nextui-org/react";
import { btnAttribs, inputAttribs } from "@/shared/ui/defaultAttribs";
import { EyeFilledIcon } from "./icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./icons/EyeSlashFilledIcon";
import { useInput, useToggle } from "@/shared";
import { Toaster } from "@/shared/ui";
import { useAppDispatch } from "@/app/appStore";
import { useLoginMutation, setCredentials } from "@/features/auth";

const Login = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const location = useLocation();
   const from: string = location.state?.from?.pathname || "/";

   const userRef = useRef<HTMLInputElement>(null);
   const errRef = useRef<HTMLInputElement>(null);

   const [pwd, setPwd] = useState("");
   const [errMsg, setErrMsg] = useState("");
   const [user, resetUser, userAttribs] = useInput("user", "");
   const [check, toggleCheck] = useToggle("persist", false);
   const [isVisible, setIsVisible] = useState(false);

   const [login, { isLoading }] = useLoginMutation();

   useEffect(() => {
      userRef.current?.focus();
   }, []);

   useEffect(() => {
      setErrMsg("");
   }, [user, pwd]);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
         const userData = await login({ user, pwd }).unwrap();
         dispatch(setCredentials({ ...userData }));
         resetUser("");
         setPwd("");
         navigate(from, { replace: true });
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
         errRef.current?.focus();
      }
   };

   return (
      <div className="pt-20 max-sm:py-10 grid place-content-center">
         <section className="sm:min-w-[600px] max-sm:w-full p-10 max-sm:p-5 border-1 shadow-3xl border-primary rounded-3xl backdrop-opacity-20 backdrop-blur-[100px] ">
            <h1 className="font-bold text-primary text-3xl mb-7 backdrop-opacity-20 backdrop-blur-[100px] drop-shadow-2xl text-center">Увійти</h1>
            <form className="grid gap-y-2 " onSubmit={handleSubmit}>
               <Input
                  {...inputAttribs}
                  autoFocus
                  type="text"
                  label="Ім'я користувача"
                  ref={userRef}
                  {...userAttribs}
                  classNames={{ label: "after:content-['']" }}
               />
               <Input
                  {...inputAttribs}
                  type={isVisible ? "text" : "password"}
                  label="Пароль"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  classNames={{ label: "after:content-['']" }}
                  endContent={
                     <button className="focus:outline-none" type="button" onClick={() => setIsVisible(!isVisible)}>
                        {isVisible ? (
                           <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                           <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                     </button>
                  }
               />
               <Checkbox className="mt-3 mb-[100px]" onChange={toggleCheck} isSelected={check}>
                  <span className="text-sm">Запам'ятати мене</span>
               </Checkbox>
               <Button {...btnAttribs} fullWidth isLoading={isLoading} type="submit">
                  Увійти
               </Button>
            </form>
            <div className="text-sm text-center mt-10">
               Ще не маєте акаунта?
               <span className="text-primary font-semibold">
                  <Link to="/registration"> Зареєструватись</Link>
               </span>
            </div>
         </section>
         <Toaster show={Boolean(errMsg)} msg={errMsg} />
      </div>
   );
};

export default Login;
