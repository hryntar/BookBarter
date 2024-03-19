import { Link } from "react-router-dom";

export const Publish = () => {
   return (
      <>
         <div>Publish</div>
         <Link className="hover:text-primary transition font-semibold" to="/">
            Home
         </Link>
      </>
   );
};
