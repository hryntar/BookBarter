import { useGetNotificationsQuery } from "@/widgets/Books/api/user.api";
import { Spinner } from "@nextui-org/react";
import RequestItem from "./RequestItem";

export const Requests = () => {
   const { data, isLoading } = useGetNotificationsQuery();

   return isLoading ? (
      <Spinner size="lg" className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]" color="primary"></Spinner>
   ) : (
      <section className="mt-[80px] max-sm:mt-[20px] sm:px-10 mx-auto">
         <h1 className="text-2xl font-semibold">Сповіщення</h1>
         <ul className="px-10 py-20 space-y-5">
            {data?.map((request) => (
              <RequestItem {...request} />
            ))}
         </ul>
      </section>
   );
};
