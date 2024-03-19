import { Link } from "react-router-dom";

export const Requests = () => {
   return (
      <>
         <div>Requests</div>
         <Link className="hover:text-primary transition font-semibold" to="/">
            Home
         </Link>
      </>
   );
};
