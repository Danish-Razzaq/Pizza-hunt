import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";


const Navbar = () => {

  const dispatch = useDispatch();
  return (
    <nav className="flex justify-between gap-4 flex-col lg:flex-row px-5 py-1 lg:items-center">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-2xl text-gray-400">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h3 className="font-bold text-3xl text-gray-700 ">
          Pizaa Hunt
        </h3>
      </div>
      <div className="lg:w-1/4 w-full ">
        <div className="relative ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-400  rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            placeholder="Search items"
            autoComplete="off"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
