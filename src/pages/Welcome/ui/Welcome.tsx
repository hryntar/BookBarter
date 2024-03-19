import { Button } from "@nextui-org/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Welcome: FC = () => {
   const navigate = useNavigate();

   return (
      <section className="h-full flex justify-between">
         <header className="absolute w-full top-0 left-0 px-10">
            <nav className="flex items-center justify-between h-[120px]">
               <img width={150} src="/logo.svg" alt="BookBarter" />
               <Button size="md" color="primary" onPress={() => navigate("/login")}>
                  Увійти
               </Button>
            </nav>
         </header>
         <div className="flex flex-col justify-center max-w-3xl leading-[1.25] pl-[50px]">
            <h1 className="font-semibold xl:text-[40px]">
               Обмінюйте прочитані книги на нові захоплюючі твори з <span className="text-primary">BookBarter</span>!
            </h1>
            <div>
               <p className="mt-10">
                  <span className="text-primary">BookBarter</span> - ваше віртуальне місце для обміну книгами! Наша платформа дозволяє вам віддати
                  прочитані книги та отримати взамін нові для себе твори.
               </p>
               <p className="mt-5">Приєднуйтесь до нас та відкрийте для себе радість обміну книгами!</p>
            </div>
            <Button size="lg" className="w-[170px] mt-10" color="primary" onPress={() => navigate("/register")}>
               Розпочати
            </Button>
         </div>
         <div className="flex justify-center items-center pr-[50px]">
            <div className="w-[500px] drop-shadow-3xl">
               <img src="/books.png" alt="WelcomePage" />   
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
