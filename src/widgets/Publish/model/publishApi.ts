import { basePublishQueryWithReAuth } from "@/app/appPublishQuery";
import { createApi  } from "@reduxjs/toolkit/query/react"; 

const publishApi = createApi({
   reducerPath: "publish",
   baseQuery: basePublishQueryWithReAuth,
   endpoints: () => ({}),
});

export default publishApi;