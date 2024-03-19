import { Button } from "@nextui-org/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Welcome: FC = () => {
   const navigate = useNavigate();

   return (
      <section className="">
         <header className="sm:px-10">
            <nav className="flex items-center justify-between sm:h-[120px] h-[80px]">
               <img className="sm:w-[150px] w-[120px]" width={150} src="/logo.svg" alt="BookBarter" />
               <Button size="md" color="primary" onPress={() => navigate("/login")}>
                  Увійти
               </Button>
            </nav>
         </header>
         <div className="flex justify-between sm:pt-10 pt-5 max-xl:flex-col">
            <div className="flex flex-col justify-center max-w-3xl md:pl-[50px] ">
               <h1 className="font-semibold text-2xl text-[30px] sm:text-[40px] sm:leading-[1.25]">
                  Обмінюйте прочитані книги на нові захоплюючі твори з <span className="text-primary">BookBarter</span>!
               </h1>
               <div className="max-sm:text-[16px]">
                  <p className="mt-10">
                     <span className="text-primary">BookBarter</span> - ваше віртуальне місце для обміну книгами! Наша платформа дозволяє вам віддати
                     прочитані книги та отримати взамін нові для себе твори.
                  </p>
                  <p className="mt-5">Приєднуйтесь до нас та відкрийте для себе радість обміну книгами!</p>
               </div>
               <Button size="lg" className="w-[170px] mt-10" color="primary" onPress={() => navigate("/login")}>
                  Розпочати
               </Button>
            </div>
            <div className="flex justify-center items-center md:pr-[50px] max-xl:pt-20">
               <div className="w-[500px] drop-shadow-3xl">
                  <img width={500} className="" src="/books.png" alt="WelcomePage" />   
               </div>
            </div>
         </div>
      </section>
      //   <section className="text-xl sm:min-w-[450px] max-sm:w-full p-10 border-1 drop-shadow-2xl shadow-3xl border-primary rounded-3xl backdrop-opacity-20 backdrop-blur-[100px] ">
      //       <h1 className="font-bold text-primary text-3xl text-center mb-7">Links</h1>
      //       <h2 className="font-semibold text-primary text-2xl mb-3">Public</h2>
      //       <nav className="grid gap-y-1">
      //          <Link className="hover:text-primary transition " to="/login">Login</Link>
      //          <Link className="hover:text-primary transition " to="/register">Register</Link>
      //       </nav>
      //       <br />
      //       <h2 className="font-semibold text-primary text-2xl mb-3">Private</h2>
      //       <nav className="grid gap-y-1">
      //          <Link className="hover:text-primary transition " to="/">Home</Link>
      //          <Link className="hover:text-primary transition " to="/wishlist">Wishlist</Link>
      //          <Link className="hover:text-primary transition " to="/requests">Requests</Link>
      //          <Link className="hover:text-primary transition " to="/profile">Profile</Link>
      //          <Link className="hover:text-primary transition " to="/publish">Add Book</Link>
      //       </nav>
      //       <br />
      //   </section>
   );
};

export default Welcome;
