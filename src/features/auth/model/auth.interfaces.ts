export interface IAuthCredentials {
   email: string;
   pwd: string;
}

export interface IAuthResponse {
   roles: number[];
   accessToken: string;
}

export interface IRegisterCredentials {
   login: string;
   pwd: string;
   email: string; 
   phone: string;
   image: Blob | null;
}

export interface RegisterReducerState {
   login: string;
   validLogin: boolean;
   loginFocus: boolean;
   email: string,
   validEmail: boolean,
   emailFocus: boolean,
   phone: string,
   validPhone: boolean,
   phoneFocus: boolean,
   pwd: string;
   validPwd: boolean;
   pwdFocus: boolean;
   matchPwd: string;
   validMatch: boolean;
   matchFocus: boolean;
   errMsg: string;
   success: boolean;
 }