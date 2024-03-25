import { RegisterReducerState } from "@/features/auth/model/auth.interfaces";

export const RegisterInitState: RegisterReducerState = {
   login: "",
   validLogin: false,
   loginFocus: false,
   email: "",
   validEmail: false,
   emailFocus: false,
   phone: "+380",
   validPhone: false,
   phoneFocus: false,
   pwd: "",
   validPwd: false,
   pwdFocus: false,
   matchPwd: "",
   validMatch: false,
   matchFocus: false,
   errMsg: "",
   success: false,
};
