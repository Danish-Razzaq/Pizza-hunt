import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import {useDispatch} from "react-redux"
import { removeFromCart, decrimentQuantity,incrementQuantity } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const OrderItems = ({image, price, category, name, key, rating, quantity, id}) => {
  const dispatch = useDispatch()

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 justify-between items-center mb-3 ">
        <div className="flex  items-center gap-2">

      <img
        src={image}
        alt=""
        className="w-20 h-20 rounded-lg"
        />
        <span>

          <h3 className="font-bold">{name}</h3>
          <p className="text-green-500 font-semibold">${price}</p>
        </span>
        </div>
      <div className="flex justify-between  flex-col items-end gap-4 ">
        <BiTrash onClick={()=>{dispatch(removeFromCart({id, image, price,quantity, name}))
        toast(`${name} Removed!!`, {
          icon: '🚮',
        });
      
      
      }} className="text-red-700 cursor-pointer hover:text-red-500 transition-all ease-linear" size={23}/>  
          <span className=" flex  gap-2 font-bold items-center">

          <AiOutlinePlus onClick={()=> dispatch(incrementQuantity({id}))} className="hover:cursor-pointer text-2xl font-extrabold border-2  hover:text-white hover:bg-green-500 border-gray-400 rounded-md  transition-all ease-linear "/>

          <span>{quantity}</span>

          <AiOutlineMinus onClick={()=> quantity > 1 ? dispatch(decrimentQuantity({id})) : (quantity= 1)}  className="hover:cursor-pointer text-2xl font-extrabold border-2 hover:text-white hover:bg-green-500  border-gray-400 rounded-md  transition-all ease-linear "/>
          </span>
      </div>
    </div>
  );
};

export default OrderItems;
