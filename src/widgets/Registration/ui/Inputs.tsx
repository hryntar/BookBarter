import { RegisterActions } from "@/features/auth/model/registerActions.type";
import { inputAttribs } from "@/shared";
import { RegisterReducerState } from "@/shared/types/auth.interfaces";
import { Input, Tooltip } from "@nextui-org/react";
import { useEffect, useRef } from "react";

interface InputsProps {
   state: RegisterReducerState;
   dispatch: React.Dispatch<RegisterActions>;
}

export const Inputs = ({ state, dispatch }: InputsProps) => {
   const loginRef = useRef<HTMLInputElement>(null); 

   useEffect(() => {
      loginRef.current?.focus();
   }, []);

   useEffect(() => {
      dispatch({ type: "SET_LOGIN", payload: state.login });
   }, [state.login,dispatch]);

   useEffect(() => {
      dispatch({ type: "SET_EMAIL", payload: state.email });
   }, [state.email, dispatch]);

   useEffect(() => {
      dispatch({ type: "SET_PWD", payload: state.pwd });
      dispatch({ type: "SET_MATCH_PWD", payload: state.matchPwd });
   }, [state.pwd, state.matchPwd, dispatch]);

   useEffect(() => {
      dispatch({ type: "SET_ERR_MSG", payload: "" });
   }, [state.login, state.pwd, state.matchPwd, dispatch]);

   return (
      <>
         <Tooltip
            placement="bottom-start"
            color="primary"
            showArrow
            isOpen={Boolean(state.loginFocus && state.login && !state.validLogin)}
            content="Наприклад: coolman0908 (Мін. к-ть символів - 4)"
         >
            <Input
               {...inputAttribs}
               type="text"
               label="Логін"
               classNames={{ label: "after:content-['']" }}
               ref={loginRef}
               onChange={(e) => dispatch({ type: "SET_LOGIN", payload: e.target.value })}
               aria-invalid={state.validLogin ? "false" : "true"}
               aria-describedby="uidnote"
               onFocus={() => dispatch({ type: "SET_LOGIN_FOCUS", payload: true })}
               onBlur={() => dispatch({ type: "SET_LOGIN_FOCUS", payload: false })}
            />
         </Tooltip>

         <Tooltip
            placement="bottom-start"
            color="primary"
            showArrow
            isOpen={Boolean(state.emailFocus && !state.validEmail)}
            content="Введіть адресу електронної пошти"
         >
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

         <Tooltip
            placement="bottom-start"
            color="primary"
            showArrow
            isOpen={Boolean(state.pwdFocus && !state.validPwd)}
            content="Від 8 до 32 символів. Обов'язкові цифри та літери"
         >
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

         <Tooltip
            placement="bottom-start"
            color="primary"
            showArrow
            isOpen={Boolean(state.matchFocus && !state.validMatch)}
            content="Паролі мають співпадати"
         >
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
      </>
   );
};
