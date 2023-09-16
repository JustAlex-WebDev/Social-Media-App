import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ searchTab, setSearchText, setSearchTab }) => {
  const navigate = useNavigate();

  return (
    <form
      className={`${
        searchTab
          ? "w-[85%] delay-300 duration-1000"
          : "w-10 delay-0 duration-500"
      } relative group ease-in-out overflow-hidden`}
    >
      <input
        type="text"
        id="search"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Wonder around..."
        className={`${
          searchTab
            ? "py-2 opacity-100 cursor-auto delay-300"
            : "py-0 opacity-0 cursor-default delay-0"
        } w-full bg-white text-black border-2 border-black pl-12 outline-none placeholder:text-neutral-600 placeholder:tracking-wider rounded-2xl duration-500 ease-in-out`}
      />
      <label
        htmlFor="search"
        title="Search"
        onClick={() => setSearchTab(true) & navigate("/search")}
        className="cursor-pointer"
      >
        <div
          className={`${
            searchTab ? "p-2 left-2 delay-300" : "p-0 left-4 delay-0"
          } flex justify-center items-center absolute top-[3px] hover:text-orange-600 duration-500 ease-in-out`}
        >
          <RiSearchLine size={22} />
        </div>
      </label>
    </form>
  );
};

export default SearchBar;
