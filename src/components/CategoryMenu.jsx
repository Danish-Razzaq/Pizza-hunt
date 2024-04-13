import { useEffect, useState } from "react";
import FoodData from "../Api/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const seletedCategory = useSelector((state) => state.category.category);

  return (
    <main className="p-5 ">
      <h3 className="font-semibold  my-2  text-xl text-gray-600  ">
        Find the best Food
      </h3>
      <style>
        {`
    /* Custom CSS to hide scrollbar */
    .overflow-scroll::-webkit-scrollbar {
      display: none;
    }
    /* Optional: Add any additional styles for scrollbar track and thumb */
    .overflow-scroll {
      scrollbar-width: none; /* Firefox */
    }`}
      </style>
      <div className="space-x-3 overflow-scroll flex">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`buttonStyle  ${seletedCategory === "All" && "bg-green-500 text-white"}`}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            onClick={() => dispatch(setCategory(category))}
            className={`buttonStyle ${seletedCategory === category && "bg-green-500 text-white"}`}
            key={index}
          >
            {category}
          </button>
        ))}
      </div>
    </main>
  );
};

export default CategoryMenu;
