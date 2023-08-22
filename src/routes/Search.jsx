import React from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { IoMdSearch } from "react-icons/io";
import { format } from "date-fns";
import { useUsers } from "../hooks/users";
import PageTransition from "../components/PageTransition";

const Search = () => {
  const { users, isLoading } = useUsers();

  if (isLoading) return null;

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
        <div className="w-full flex flex-col justify-center items-center gap-8 black">
          {users.map((user) => (
            <div
              key={user.id}
              className="w-full py-4 flex justify-start items-center gap-4 border-b border-neutral-700"
            >
              <Link to={`/profile/${user.id}`}>
                <img
                  title="See Profile"
                  src={user.avatar}
                  alt="https://i.pinimg.com/originals/f8/fd/fd/f8fdfde70bd8bd51925808dd6a792024.jpg"
                  className="w-20 h-20 bg-black border-white hover:border-[#BF0000] border-2 rounded-full object-cover duration-300 ease-in-out"
                />
              </Link>
              <div>
                <div className="font-semibold">{user.username}</div>
                <div>Joined: {format(user.date, "MMMM YYY")}</div>
              </div>
            </div>
          ))}
        </div>
      </m.div>
    </>
  );
};

export default Search;
