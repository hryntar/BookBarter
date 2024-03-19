import { Link } from "react-router-dom";

export const Wishlist = () => {
   return (
      <>
         <div>Wishlist</div>
         <Link className="hover:text-primary transition font-semibold" to="/">
            Home
         </Link>
      </>
   );
};
