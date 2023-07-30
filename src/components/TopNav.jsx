import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PostModalContext } from "../context/PostModalContext";

const TopNav = () => {
  const { setPostModal } = useContext(PostModalContext);

  return (
    <div
      onClick={() => setPostModal(false)}
      className="bg-black z-50 fixed top-0 left-0 w-full border-b-2 border-[#BF0000]"
    >
      <div className="max-w-[1140px] m-auto bg-black px-8 h-20 flex justify-between items-center">
        <Link
          to="/"
          title="Home"
          className="uppercase font-bold text-4xl text-[#BF0000] hover:cursor-pointer hover:opacity-80"
        >
          rev
        </Link>
        <Link
          to="/profile"
          title="Profile"
          className="w-10 h-10 bg-black border-[#BF0000] border-2 rounded-full hover:cursor-pointer hover:opacity-80"
        ></Link>
      </div>
    </div>
  );
};

export default TopNav;
