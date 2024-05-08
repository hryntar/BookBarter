import { Rating } from "@/shared/ui";
import { INotification } from "@/widgets/Books/model/user.interface";

const RequestItem = ({ ...request }: INotification) => {
   return (
      <li className="p-5 border rounded-xl border-primary shadow-3xl flex items-center justify-between">
         <div className="flex items-center gap-x-10">
            <div>
               <p className="text-2xl">{request.login}</p>
               <Rating value={request.rating} />
            </div>
            <p>{request.title}</p>
         </div>
         <div>
            <p>
               Ціна: <span className="font-bold">{request.price}</span>
            </p>
            <p>
               Телефон: <span className="font-bold">{request.phone}</span>
            </p>
         </div>
      </li>
   );
};

export default RequestItem;
