import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const SearchUser = ({ user }) => {
  return (
    <Link
      to={`/profile/${user.id}`}
      className="w-full pb-4 flex justify-start items-center gap-4 hover:opacity-50 duration-300 ease-in-out"
    >
      <img
        title="See Profile"
        src={user.avatar}
        alt="https://i.pinimg.com/originals/f8/fd/fd/f8fdfde70bd8bd51925808dd6a792024.jpg"
        className="w-[3.5rem] h-[3.5rem] bg-black border border-black rounded-full object-cover"
      />
      <div>
        <div className="font-semibold text-lg tracking-wider text-orange-600">
          {user.username}
        </div>
        <div className="tracking-wider text-sm">
          Joined: {format(user.date, "MMMM YYY")}
        </div>
      </div>
    </Link>
  );
};

export default SearchUser;
