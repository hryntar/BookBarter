import { baseQueryWithReAuth } from "@/app/appQuery";
import { createApi  } from "@reduxjs/toolkit/query/react"; 

const baseApi = createApi({
   baseQuery: baseQueryWithReAuth,
   endpoints: () => ({}),
});

export default baseApi;