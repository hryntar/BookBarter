import { useEffect, useState } from "react";

interface Props {
   msg: string,
   show: boolean, 
}

export const Toster = ({msg, show}: Props) => {
   const [isVisible, setIsVisible] = useState(show);

   useEffect(() => {
      setIsVisible(show);
   }, [show]);

   return (
      <div className={`fixed transition-all duration-800  ${isVisible ? 'translate-x-0 opacity-100 visible' : 'translate-x-[50px] opacity-0 invisible'} bottom-0 right-0 m-6 bg-transparent p-3 border-1 max-sm:text-sm text-md border-danger text-danger rounded-lg`}>
         {msg}
      </div>
   );
};
