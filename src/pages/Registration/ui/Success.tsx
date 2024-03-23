import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router";

export const Success = () => {
   const navigate = useNavigate();

   return (
      <section className="text-center grid place-content-center pt-20">
         <div className="m-auto">
            <img src="/success.gif" alt="Success" />
         </div>
         <h1 className="mt-10 font-bold text-primary text-2xl">
            Ви успішно <br /> зареєстрували акаунт!
         </h1>
         <Button color="primary" size="lg" className="w-[150px] mx-auto mt-5" onPress={() => navigate("/login")}>
            Увійти
         </Button>
      </section>
   );
};
