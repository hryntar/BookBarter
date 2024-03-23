export interface IAuthCredentials {
   user: string;
   pwd: string;
}

export interface IAuthResponse {
   roles: number[];
   accessToken: string;
}

export interface IRegisterCredentials {
   user: string;
   pwd: string;
   email: string; 
}

export interface RegisterReducerState {
   user: string;
   validUser: boolean;
   userFocus: boolean;
   email: string,
   validEmail: boolean,
   emailFocus: boolean,
   pwd: string;
   validPwd: boolean;
   pwdFocus: boolean;
   matchPwd: string;
   validMatch: boolean;
   matchFocus: boolean;
   errMsg: string;
   success: boolean;
 }