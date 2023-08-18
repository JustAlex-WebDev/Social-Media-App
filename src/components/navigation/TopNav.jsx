import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { PostModalContext } from "../../context/PostModalContext";

const TopNav = () => {
  const { setPostModal } = useContext(PostModalContext);
  const { user, isLoading } = useAuth();

  if (isLoading) return null;

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
        <Link to="/profile">
          <img
            title="Profile"
            src={user.avatar}
            alt="https://i.pinimg.com/originals/f8/fd/fd/f8fdfde70bd8bd51925808dd6a792024.jpg"
            className="w-11 h-11 bg-black border-[#BF0000] border-2 rounded-full hover:cursor-pointer hover:opacity-80 object-scale-down"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
