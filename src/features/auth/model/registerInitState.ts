import { RegisterReducerState } from "@/shared/types/auth.interfaces";

export const initialState: RegisterReducerState = {
   user: "",
   validUser: false,
   userFocus: false,
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
