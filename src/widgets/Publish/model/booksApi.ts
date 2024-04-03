import { baseQueryWithReAuth } from "@/app/appQuery";
import { createApi  } from "@reduxjs/toolkit/query/react"; 

const booksApi = createApi({
   baseQuery: baseQueryWithReAuth,
   endpoints: () => ({}),
});

export default booksApi;