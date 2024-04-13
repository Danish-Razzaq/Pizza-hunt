// import FoodCart from "./FoodCart"
import toast, { Toaster } from "react-hot-toast";
import FoodData from "../Api/FoodData";
import FoodCart from "./FoodCart";
import { useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const Fooditems = () => {
  const category = useSelector((state) => state.category.category);
  const  search = useSelector((state) => state.search.search)

  const handleToast = (name) => toast.success(`Added ${name}`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="p-2 my-10 flex gap-10 flex-wrap  justify-center lg:justify-start mx-5">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (category === food.category && food.name.toLowerCase().includes(search.toLowerCase()) )
          }
        }).map((food) => (
          <FoodCart
            id={food.id}
            name={food.name}
            category={food.category}
            price={food.price}
            desc={food.desc}
            key={food.id}
            rating={food.rating}
            image={food.img}
            handleToast={handleToast}
          />
        ))}

        {/* {FoodData.map((food) => (
        <FoodCart
        id={food.id}
        name={food.name}
        category={food.category}
        price={food.price}
        desc={food.desc}
        key={food.id}
        rating={food.rating}
        image={food.img}
        handleToast ={handleToast}
        />
      ))} */}
      </div>
    </>
  );
};

export default Fooditems;
