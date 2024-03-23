import { RegisterReducerState } from "@/shared/types/auth.interfaces";

export const RegisterInitState: RegisterReducerState = {
   login: "",
   validLogin: false,
   loginFocus: false,
   email: "",
   validEmail: false,
   emailFocus: false,
   pwd: "",
   validPwd: false,
   pwdFocus: false,
   matchPwd: "",
   validMatch: false,
   matchFocus: false,
   errMsg: "",
   success: false,
};
