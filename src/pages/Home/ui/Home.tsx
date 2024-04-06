import { Books } from "@/widgets/Books";
import { Header } from "@/widgets/Header";

import { FC } from "react";

const Home: FC = () => {
   return (
      <>
         <Header />
         <Books />
      </>
   );
};

export default Home;
