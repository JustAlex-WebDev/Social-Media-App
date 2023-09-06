import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { IoMdSearch } from "react-icons/io";
import { format } from "date-fns";
import { useUsers } from "../hooks/users";
import PageTransition from "../components/PageTransition";

const Search = () => {
  const { users, isLoading } = useUsers();
  const [searchText, setSearchText] = useState("");

  if (isLoading) return null;

  return (
    <>
      <PageTransition />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative mt-20 mb-12 bg-primary h-full w-full max-w-[390px] m-auto black px-8 flex flex-col justify-center items-start gap-4 text-primary"
      >
        <form className="w-full relative group">
          <input
            type="text"
            id="search"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search a user"
            className="bg-black border-b-2 border-b-neutral-300 group-hover:border-b-white py-4 w-full outline-none text-primary placeholder:text-neutral-30 group-hover:placeholder:text-primary duration-300 ease-in-out"
          />
          <label htmlFor="search" className="cursor-pointer">
            <div className="flex justify-center items-center p-2 absolute top-2 right-0 text-neutral-300 group-hover:text-primary duration-300 ease-in-out">
              <IoMdSearch size={24} />
            </div>
          </label>
        </form>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          {users
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value.username.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((user) => (
              <Link
                to={`/profile/${user.id}`}
                key={user.id}
                className="w-full py-4 flex justify-start items-center gap-4 border-b border-neutral-700 hover:opacity-50 duration-300 ease-in-out"
              >
                <img
                  title="See Profile"
                  src={user.avatar}
                  alt="https://i.pinimg.com/originals/f8/fd/fd/f8fdfde70bd8bd51925808dd6a792024.jpg"
                  className="w-16 h-16 bg-black border-white border-2 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{user.username}</div>
                  <div>Joined: {format(user.date, "MMMM YYY")}</div>
                </div>
              </Link>
            ))}
        </div>
      </m.div>
    </>
  );
};

export default Search;
