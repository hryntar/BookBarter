import { baseQueryWithReAuth } from "@/app/appQuery";
import { createApi  } from "@reduxjs/toolkit/query/react"; 

const authApi = createApi({
   baseQuery: baseQueryWithReAuth,
   endpoints: () => ({}),
});

export default authApi;