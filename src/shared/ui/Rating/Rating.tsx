import React from "react";
import "tailwindcss/tailwind.css";
import { StarHalfIcon, StarIcon } from "lucide-react";

type StarProps = {
   value: number;
};

const Rating: React.FC<StarProps> = ({ value }) => {
   const fullStars = Math.floor(value);
   const halfStar = value % 1 !== 0;
   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

   return (
      <div className="flex">
         {[...Array(fullStars)].map((_, i) => (
            <StarIcon fill="#66FCF1" size={15} key={i} className="text-primary" />
         ))}
         {halfStar && (
            <div className="relative">
               <StarIcon fill="" size={15} className="text-primary" />
               <div className="absolute inset-0">
                  <StarHalfIcon fill="#66FCF1" size={15} className="text-primary" />
               </div>
            </div>
         )}
         {[...Array(emptyStars)].map((_, i) => (
            <StarIcon size={15} key={i} className="text-primary" />
         ))}
      </div>
   );
};

export default Rating;
