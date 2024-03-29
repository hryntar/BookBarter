import { Header } from "@/widgets/Header";

import { FC } from "react";

const Home: FC = () => {
   return (
      <>
         <Header />
         <div className="mt-[200px] grid place-content-center text-center">Тут будуть книги</div>
      </>
   );
};

export default Home;
