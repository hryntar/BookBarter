import { RegisterReducerState } from "@/features/auth/model/auth.interfaces";
import { RegisterActions } from "./registerActions.type";
import { EMAIL_REGEX, PHONE_REGEX, PWD_REGEX, USER_REGEX } from "./regEx";

export const reducer = (state: RegisterReducerState, action: RegisterActions): RegisterReducerState => {
   switch (action.type) {
      case "SET_LOGIN":
         return { ...state, login: action.payload, validLogin: USER_REGEX.test(action.payload) }; 
      case "SET_EMAIL":
         return { ...state, email: action.payload, validEmail: EMAIL_REGEX.test(action.payload) };
      case "SET_PHONE":
         return { ...state, phone: action.payload, validPhone: PHONE_REGEX.test(action.payload) };
      case "SET_PWD":
         return { ...state, pwd: action.payload, validPwd: PWD_REGEX.test(action.payload), validMatch: action.payload === state.matchPwd };
      case "SET_MATCH_PWD":
         return { ...state, matchPwd: action.payload, validMatch: state.pwd === action.payload };
      case "SET_ERR_MSG":
         return { ...state, errMsg: action.payload };
      case "SET_SUCCESS":
         return { ...state, success: action.payload };
      case "SET_LOGIN_FOCUS":
         return { ...state, loginFocus: action.payload };
      case "SET_PWD_FOCUS":
         return { ...state, pwdFocus: action.payload };
      case "SET_EMAIL_FOCUS":
         return { ...state, emailFocus: action.payload };
      case "SET_PHONE_FOCUS":
         return { ...state, phoneFocus: action.payload };
      case "SET_MATCH_FOCUS":
         return { ...state, matchFocus: action.payload };
      default:
         throw new Error();
   }
};