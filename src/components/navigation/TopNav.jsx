import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PiChatsFill } from "react-icons/pi";
import { useAuth } from "../../hooks/auth";
import { PostModalContext } from "../../context/PostModalContext";

const TopNav = () => {
  const { setPostModal } = useContext(PostModalContext);
  const { user, isLoading } = useAuth();

  if (isLoading) return null;

  return (
    <div
      onClick={() => setPostModal(false)}
      className="z-50 fixed top-0 left-0 w-full bg-primary border-b border-primary"
    >
      <div className="max-w-[1140px] m-auto px-8 h-20 bg-primary flex justify-between items-center">
        <Link
          to="/"
          title="Home"
          className="text-secondary text-4xl font-bold hover:opacity-80 transition-all"
        >
          REV
        </Link>
        {/* <Link to="/profile">
          <img
            title="Profile"
            src={user.avatar}
            alt=""
            className="w-11 h-11 bg-primary border-primary hover:border-secondary border-2 rounded-full object-cover transition-all"
          />
        </Link> */}
        <Link to="/">
          <PiChatsFill size={26} className="text-secondary hover:opacity-80" />
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
