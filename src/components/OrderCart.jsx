import { IoMdClose } from "react-icons/io";
import OrderItems from "./OrderItems";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaShoppingBasket, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OrderCart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cart);
  const totleQuantity = cartItems.reduce(
    (totalQuantity, item) => totalQuantity + item.quantity,
    0
  );
  const totalePrice = cartItems.reduce(
    (totalePrice, item) => totalePrice + item.price * item.quantity,
    0
  );
  return (
    <>
      <div
        className={`${
          activeCart ? "translate-x-0" : "translate-x-full"
        }   fixed right-0 top-0 w-[25vw] max-md:w-full max-lg:w-[40vw]  h-full bg-white p-5 transition-all duration-500 z-10  `}
      >
        <div className="flex justify-between items-center ">
          <span className="text-2xl  text-gray-700 font-bold">My Order</span>
          <IoMdClose
            onClick={() => !setActiveCart()}
            className="text-2xl font-extrabold border-2  border-gray-400 rounded-md hover:text-red-700 cursor-pointer"
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <OrderItems
              key={item.id}
              id={item.id}
              category={item.category}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))
        ) : (
          <div className="flex justify-center items-center text-gray-700 font-extrabold h-[80vh] flex-col gap-4">
            <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
            <FaShoppingBasket size={60} className="text-gray-500" />
          </div>
        )}

        <div className="space-y-2 bottom-4 absolute  ">
          <h3 className="font-bold ">Items: {totleQuantity}</h3>
          <h3 className="font-bold">Total Amount: {totalePrice}</h3>
          <hr />
          <button
            onClick={() => navigate("/success")}
            className={`px-3 py-2 lg:w-[23vw] w-[90vw]   font-bold rounded-md  ${
              totleQuantity >= 1
                ? "bg-green-500 hover:bg-green-400  hover:text-white"
                : "bg-green-300 "
            } `}
          >
            CheckOut
          </button>
        </div>
      </div>
      <span
        className={`fixed top-100 rounded-full bg-white hover:bg-gray-200 shadow-md text-5xl p-3 bottom-5  right-5 cursor-pointer  ${
          totleQuantity > 0 && "animate-bounce delay-500 transition-all"
        } `}
      >
        <span className="bg-red-500 h-5  w-5 right-1 -top-1 rounded-full absolute text-white text-sm justify-center items-center flex ">
          {cartItems.length}
        </span>
        <FaShoppingCart
          onClick={() => setActiveCart(true)}
          className="hover:text-yellow-500"
        />
      </span>
    </>
  );
};

export default OrderCart;
