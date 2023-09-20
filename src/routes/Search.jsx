import React from "react";
import { motion as m } from "framer-motion";
import { useUsers } from "../hooks/users";
import SearchUser from "../components/SearchUser";
import { useSearchContext } from "../context/SearchContext";
import PageTransition from "../components/PageTransition";
import Navigation from "../components/navigation/Navigation";

const Search = () => {
  const { users, isLoading } = useUsers();
  const { searchText } = useSearchContext();

  if (isLoading) return null;

  return (
    <>
      {/* <PageTransition /> */}
      {/* <Navigation /> */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="bg-white text-black h-full w-full max-w-[500px] m-auto p-4 flex flex-col justify-center items-start gap-4"
      >
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
              <SearchUser key={user.id} user={user} />
            ))}
        </div>
      </m.div>
    </>
  );
};

export default Search;
