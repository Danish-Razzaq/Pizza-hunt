import { AiFillStar } from "react-icons/ai";
import {useDispatch} from 'react-redux'
import { addToCart } from "../redux/slices/CartSlice";

const FoodCart = ({ image, price, category, name, desc, key, rating, id, handleToast }) => {
  const dispatch = useDispatch()

  return (
    <div className=" rounded-lg    w-[250px]  space-y-3 p-5 bg-white  flex flex-col  justify-between">
      <img
        src={image}
        alt="product"
        className="rounded-lg w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <span>
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold text-gray-900 "> {name} </h3>
          <span className="font-bold text-xl text-green-500 "> ${price}</span>
        </div>
        <p className="text-sm font-normal ">{desc.slice(0, 48)}...</p>
      </span>
      <div className="flex justify-between  ">
        <span className="flex gap-2 items-center">
          <AiFillStar className="text-yellow-500 " />
          {rating}
        </span>
        <button onClick={()=> dispatch(addToCart({image, price, category,id,  name, key, rating, quantity:1}), handleToast(name))} className="px-3 py-1  font-bold rounded-md bg-green-400 hover:bg-green-300 hover:text-white" >
          Add To Catd
        </button>
      </div>
    </div>
  );
};

export default FoodCart;
