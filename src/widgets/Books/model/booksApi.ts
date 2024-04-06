import { baseBookQueryWithReAuth } from "@/app/appBookQuery";
import { createApi  } from "@reduxjs/toolkit/query/react"; 

const booksApi = createApi({
   reducerPath: "book",
   baseQuery: baseBookQueryWithReAuth,
   endpoints: () => ({}),
});

export default booksApi;