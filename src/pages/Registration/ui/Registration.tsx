import { useEffect, useRef, FC, useReducer, useState } from "react";
import { Link } from "react-router-dom"; 
import { Checkbox, Input, Tooltip, Button } from "@nextui-org/react"; 
import { btnAttribs, inputAttribs } from "@/shared/ui/defaultAttribs";
import { Toaster } from "@/shared/ui";
import { RegisterInitState, reducer, useRegisterMutation} from "@/features/auth"; 

const Registration: FC = () => {
   const userRef = useRef<HTMLInputElement>(null);
   const errRef = useRef<HTMLInputElement>(null);
   const [agree, setAgree] = useState(false);

   const [state, dispatch] = useReducer(reducer, RegisterInitState);

   const [register, { isLoading }] = useRegisterMutation();

   useEffect(() => {
      userRef.current?.focus();
   }, []);

   useEffect(() => {
      dispatch({ type: "SET_LOGIN", payload: state.login });
   }, [state.login]);

   useEffect(() => {
      dispatch({ type: "SET_EMAIL", payload: state.email });
   }, [state.email]);

   useEffect(() => {
      dispatch({ type: "SET_PWD", payload: state.pwd });
      dispatch({ type: "SET_MATCH_PWD", payload: state.matchPwd });
   }, [state.pwd, state.matchPwd]);

   useEffect(() => {
      dispatch({ type: "SET_ERR_MSG", payload: "" });
   }, [state.login, state.pwd, state.matchPwd]);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try { 
         await register({ login: state.login, pwd: state.pwd, email: state.email }).unwrap();
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
      <div className="grid place-content-center py-10">
         {state.success ? (
            <section>
               <h1>You successfully registered an account </h1>
               <p>
                  <Link to="/login">Sign In</Link>
               </p>
            </section>
         ) : (
            <section className="sm:min-w-[600px] max-sm:w-full p-10 max-sm:p-5 border-1 shadow-3xl border-primary rounded-3xl"> 
               <h1 className="font-bold text-primary text-3xl text-center mb-7">Зареєструватись</h1>
               <form className="grid gap-y-2" onSubmit={handleSubmit}>
                  <Tooltip placement="bottom-start" color="primary" showArrow isOpen={Boolean(state.loginFocus && state.login && !state.validLogin)} content="Наприклад: coolman0908 (Мін. к-ть символів - 4)">
                     <Input
                        {...inputAttribs}
                        type="text"
                        label="Логін"
                        classNames={{ label: "after:content-['']" }}
                        ref={userRef}
                        onChange={(e) => dispatch({ type: "SET_LOGIN", payload: e.target.value })}
                        aria-invalid={state.validLogin ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => dispatch({ type: "SET_LOGIN_FOCUS", payload: true })}
                        onBlur={() => dispatch({ type: "SET_LOGIN_FOCUS", payload: false })}
                     />
                  </Tooltip> 

                  <Tooltip placement="bottom-start" color="primary" showArrow isOpen={Boolean(state.emailFocus && !state.validEmail)} content="Введіть адресу електронної пошти">
                     <Input
                        {...inputAttribs}
                        type="email"
                        label="Email"
                        classNames={{ label: "after:content-['']" }} 
                        onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
                        aria-invalid={state.validEmail ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => dispatch({ type: "SET_EMAIL_FOCUS", payload: true })}
                        onBlur={() => dispatch({ type: "SET_EMAIL_FOCUS", payload: false })}
                     />
                  </Tooltip> 

                  <Tooltip placement="bottom-start" color="primary" showArrow isOpen={Boolean(state.pwdFocus && !state.validPwd)} content="Від 8 до 32 символів. Обов'язкові цифри та літери">
                     <Input
                        {...inputAttribs}
                        label="Пароль"
                        type="password"
                        classNames={{ label: "after:content-['']" }}
                        onChange={(e) => dispatch({ type: "SET_PWD", payload: e.target.value })}
                        value={state.pwd}
                        aria-invalid={state.validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => dispatch({ type: "SET_PWD_FOCUS", payload: true })}
                        onBlur={() => dispatch({ type: "SET_PWD_FOCUS", payload: false })}
                     />
                  </Tooltip> 

                  <Tooltip placement="bottom-start" color="primary" showArrow isOpen={Boolean(state.matchFocus && !state.validMatch)} content="Паролі мають співпадати">
                     <Input
                        {...inputAttribs}
                        label="Підтвердіть пароль"
                        type="password"
                        onChange={(e) => dispatch({ type: "SET_MATCH_PWD", payload: e.target.value })}
                        value={state.matchPwd}
                        aria-invalid={state.validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        classNames={{ label: "after:content-['']" }}
                        onFocus={() => dispatch({ type: "SET_MATCH_FOCUS", payload: true })}
                        onBlur={() => dispatch({ type: "SET_MATCH_FOCUS", payload: false })}
                     />
                  </Tooltip>
                  
                  <Checkbox className="mt-3 mb-[100px]" onChange={() => setAgree(!agree)}>
                     <span className="text-sm">
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
         <Toaster show={Boolean(state.errMsg)} msg={state.errMsg}/>
      </div>
   );
};

export default Registration;
