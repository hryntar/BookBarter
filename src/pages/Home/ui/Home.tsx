import { FC } from "react";
import { Link } from "react-router-dom";



const Home: FC = () => {


   return (
      <section className="text-xl sm:min-w-[450px] max-sm:w-full p-10 border-1 drop-shadow-2xl shadow-3xl border-primary rounded-3xl backdrop-opacity-20 backdrop-blur-[100px] ">
         <h1 className="font-bold text-primary text-3xl text-center mb-7">Home</h1>
         <nav className="grid gap-y-5 font-semibold mb-[100px]">
            <Link className="hover:text-primary transition" to="/profile">
               Profile
            </Link>
            <Link className="hover:text-primary transition" to="/wishlist">
               Wishlist
            </Link>
            <Link className="hover:text-primary transition" to="/publish">
               Add book
            </Link>
            <Link className="hover:text-primary transition" to="/requests">
               Requests
            </Link>
         </nav>
         
      </section>
   );
};

export default Home;
