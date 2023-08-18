import React from "react";
import { motion as m } from "framer-motion";
import { IoMdSearch } from "react-icons/io";
import PageTransition from "../components/PageTransition";

const Search = () => {
  return (
    <>
      <PageTransition />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative my-20 bg-black h-full w-full max-w-[1140px] m-auto black p-8 flex flex-col justify-center items-start gap-4 text-white"
      >
        <div className="text-xl font-semibold">Search a user</div>
        <div className="w-full relative">
          <input
            type="text"
            id="search"
            placeholder="Search a user"
            className="bg-black border-2 border-[#aaaaaa] rounded-full p-2 pl-4 w-full outline-none text-white ease-in-out duration-300 delay-700"
          />
          <label
            htmlFor="search"
            className="hover:cursor-pointer hover:opacity-80"
          >
            <div className="bg-[#BF0000] flex justify-center items-center rounded-full p-2 absolute top-[0.1rem] right-[0.1rem] text-white">
              <IoMdSearch size={24} />
            </div>
          </label>
        </div>
      </m.div>
    </>
  );
};

export default Search;
