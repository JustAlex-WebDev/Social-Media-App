import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdOutlineHome,
  MdHome,
  MdOutlineSearch,
  MdSearch,
  MdOutlineAdd,
  MdAdd,
  MdOutlineNotificationsNone,
  MdNotifications,
  MdOutlinePersonOutline,
  MdPerson,
} from "react-icons/md";
import { PostModalContext } from "../../context/PostModalContext";
import { useAuth } from "../../hooks/auth";

const BottomNav = () => {
  const { postModal, setPostModal } = useContext(PostModalContext);
  const location = useLocation();
  const { user } = useAuth();

  return (
    <div className="z-50 fixed bottom-0 left-0 w-full bg-primary border-t border-primary text-primary">
      <div className="max-w-[1140px] m-auto px-8 h-20 bg-primary flex justify-between items-center gap-4">
        <Link
          to="/"
          title="Home"
          onClick={() => setPostModal(false)}
          className={`${
            location.pathname === "/" && !postModal
              ? "text-secondary"
              : "text-primary"
          } hover:text-secondary transition-all`}
        >
          {location.pathname === "/" && !postModal ? (
            <MdHome size={28} />
          ) : (
            <MdOutlineHome size={28} />
          )}
        </Link>
        <Link
          to="/search"
          title="Search"
          onClick={() => setPostModal(false)}
          className={`${
            location.pathname === "/search" && !postModal
              ? "text-secondary"
              : "text-primary"
          } hover:text-secondary transition-all`}
        >
          {location.pathname === "/search" && !postModal ? (
            <MdSearch size={26} />
          ) : (
            <MdOutlineSearch size={26} />
          )}
        </Link>
        {user ? (
          <div
            title="Post"
            onClick={() => setPostModal(!postModal)}
            className={`${
              postModal
                ? "text-secondary border-primary"
                : "text-primary border-secondary"
            } border-2 hover:border-primary p-1 rounded-full cursor-pointer hover:text-secondary transition-all`}
          >
            <MdOutlineAdd size={30} />
          </div>
        ) : (
          <Link to="/signin">
            <div
              title="Post"
              className={`${
                postModal
                  ? "text-secondary border-primary"
                  : "text-primary border-secondary"
              } border-2 hover:border-primary p-1 rounded-full cursor-pointer hover:text-secondary transition-all`}
            >
              <MdOutlineAdd size={30} />
            </div>
          </Link>
        )}

        <Link
          to="/notifications"
          title="Notifications"
          onClick={() => setPostModal(false)}
          className={`${
            location.pathname === "/notifications" && !postModal
              ? "text-secondary"
              : "text-primary"
          } hover:text-secondary transition-all`}
        >
          {location.pathname === "/notifications" && !postModal ? (
            <MdNotifications size={26} />
          ) : (
            <MdOutlineNotificationsNone size={26} />
          )}
        </Link>
        {user ? (
          <Link
            to="/profile"
            title="Profile"
            onClick={() => setPostModal(false)}
            className={`${
              location.pathname === "/profile" && !postModal
                ? "text-secondary"
                : "text-primary"
            } hover:text-secondary transition-all`}
          >
            {location.pathname === "/profile" && !postModal ? (
              <MdPerson size={30} />
            ) : (
              <MdOutlinePersonOutline size={30} />
            )}
          </Link>
        ) : (
          <Link
            to="/signin"
            title="Profile"
            className={`${
              location.pathname === "/profile" && !postModal
                ? "text-secondary"
                : "text-primary"
            } hover:text-secondary transition-all`}
          >
            {location.pathname === "/profile" && !postModal ? (
              <MdPerson size={30} />
            ) : (
              <MdOutlinePersonOutline size={30} />
            )}
          </Link>
        )}
      </div>
    </div>
  );
};

export default BottomNav;
