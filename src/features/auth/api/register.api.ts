import { IRegisterCredentials } from "@/features/auth/model/auth.interfaces";
import { baseApi } from "..";

export const registerSlice = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      register: builder.mutation<void, IRegisterCredentials>({
         query: (credentials) => {
            const formData = new FormData(); 
            formData.append('login', credentials.login);
            formData.append('pwd', credentials.pwd);
            formData.append('email', credentials.email);
            formData.append('phone', credentials.phone);
            formData.append('image', credentials.image || '');

            return {
               url: "auth/registration",
               method: "POST",
               body: formData,
            }
         },
      }),
   }),
});

export const { useRegisterMutation } = registerSlice;


