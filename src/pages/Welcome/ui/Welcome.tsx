import ModalLogin from "@/pages/Login/ui/ModalLogin";
import { Button, useDisclosure } from "@nextui-org/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Welcome: FC = () => {
   const navigate = useNavigate();
   const { isOpen, onOpen, onOpenChange } = useDisclosure();

   return (
      <>
         <section>
            <header className="sm:px-10">
               <nav className="flex items-center justify-between sm:h-[120px] h-[80px]">
                  <img className="sm:w-[150px] w-[120px]" width={150} src="/logo.svg" alt="BookBarter" />
                  <Button size="md" color="primary" onPress={onOpen}>
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
                        <span className="text-primary">BookBarter</span> - ваше віртуальне місце для обміну книгами! Наша платформа дозволяє вам
                        віддати прочитані книги та отримати взамін нові для себе твори.
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
         <ModalLogin isOpen={isOpen} onOpenChange={onOpenChange} /> 
      </> 
   );
};

export default Welcome;
