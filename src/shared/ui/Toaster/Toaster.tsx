import { useEffect, useState } from "react";

interface Props {
   msg: string,
   show: boolean, 
}

export const Toaster = ({msg, show}: Props) => {
   const [isVisible, setIsVisible] = useState(show);

   useEffect(() => {
      setIsVisible(show);
   }, [show]);

   return (
      <div className={`fixed transition-all duration-1200  ${isVisible ? 'translate-x-0 opacity-100 visible' : 'translate-x-[350px] opacity-0 invisible'} bottom-0 right-0 m-6 bg-danger p-3  max-sm:text-sm text-md border-white text-white rounded-lg`}>
         {msg}
      </div>
   );
};
