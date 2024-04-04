import { baseBookQueryWithReAuth } from "@/app/appBookQuery";
// import { baseQueryWithReAuth } from "@/app/appQuery";
import { createApi  } from "@reduxjs/toolkit/query/react"; 

const booksApi = createApi({
   baseQuery: baseBookQueryWithReAuth,
   endpoints: () => ({}),
});

export default booksApi;