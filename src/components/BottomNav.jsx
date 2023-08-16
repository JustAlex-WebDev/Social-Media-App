import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdAdd, IoMdSearch, IoMdNotificationsOutline } from "react-icons/io";
import { PostModalContext } from "../context/PostModalContext";

const BottomNav = () => {
  const { postModal, setPostModal } = useContext(PostModalContext);
  const location = useLocation();

  return (
    <div className="bg-black z-50 fixed bottom-0 left-0 w-full border-t-2 border-[#BF0000] text-white">
      <div className="bg-black max-w-[1140px] m-auto px-8 h-20 flex justify-between items-center">
        <Link to="/">
          <AiOutlineHome
            title="Home"
            size={24}
            onClick={() => setPostModal(false)}
            className={`${
              location.pathname === "/" ? "text-[#BF0000]" : "text-white"
            } ${
              postModal ? "text-white" : "text-[#BF0000]"
            } cursor-pointer hover:text-[#BF0000]`}
          />
        </Link>
        <IoMdAdd
          title="Post"
          size={24}
          onClick={() => setPostModal(!postModal)}
          className={`${
            postModal ? "text-[#BF0000]" : "text-white"
          } cursor-pointer hover:text-[#BF0000]`}
        />
        <Link to="/search">
          <IoMdSearch
            title="Search"
            size={24}
            onClick={() => setPostModal(false)}
            className={`${
              location.pathname === "/search" ? "text-[#BF0000]" : "text-white"
            } ${
              postModal ? "text-white" : "text-[#BF0000]"
            } cursor-pointer hover:text-[#BF0000]`}
          />
        </Link>
        <Link to="/notifications">
          <IoMdNotificationsOutline
            title="Notifications"
            size={24}
            onClick={() => setPostModal(false)}
            className={`${
              location.pathname === "/notifications"
                ? "text-[#BF0000]"
                : "text-white"
            } ${
              postModal ? "text-white" : "text-[#BF0000]"
            } cursor-pointer hover:text-[#BF0000]`}
          />
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
