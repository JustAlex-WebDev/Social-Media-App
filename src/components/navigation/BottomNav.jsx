import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion as m } from "framer-motion";
import {
  MdOutlineHome,
  MdHome,
  MdOutlineSearch,
  MdSearch,
  MdOutlineAdd,
  MdOutlineNotificationsNone,
  MdNotifications,
  MdOutlinePersonOutline,
  MdPerson,
} from "react-icons/md";
import { useAuth } from "../../hooks/auth";

const BottomNav = () => {
  const location = useLocation();
  const { user } = useAuth();

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="z-50 fixed bottom-0 left-0 w-full bg-gradient-to-t from-black to-100% text-primary"
    >
      <div className="max-w-[390px] m-auto px-8 h-20 bg-gradient-to-t from-black to-100% flex justify-between items-center gap-4">
        <Link
          to="/"
          title="Home"
          className={`${
            location.pathname === "/" ? "text-secondary" : "text-primary"
          } hover:text-secondary transition-all`}
        >
          {location.pathname === "/" ? (
            <MdHome size={28} />
          ) : (
            <MdOutlineHome size={28} />
          )}
        </Link>
        <Link
          to="/search"
          title="Search"
          className={`${
            location.pathname === "/search" ? "text-secondary" : "text-primary"
          } hover:text-secondary transition-all`}
        >
          {location.pathname === "/search" ? (
            <MdSearch size={26} />
          ) : (
            <MdOutlineSearch size={26} />
          )}
        </Link>
        {user ? (
          <Link
            to="/post"
            title="Post"
            className={`${
              location.pathname === "/post"
                ? "text-secondary border-primary"
                : "text-primary border-secondary"
            } border-2 hover:border-primary p-1 rounded-full cursor-pointer hover:text-secondary transition-all text-primary`}
          >
            <MdOutlineAdd size={30} />
          </Link>
        ) : (
          <Link to="/signin">
            <div
              title="Post"
              className={`${
                location.pathname === "/post"
                  ? "text-secondary border-primary"
                  : "text-primary border-secondary"
              } border-2 hover:border-primary p-1 rounded-full cursor-pointer hover:text-secondary transition-all`}
            >
              <MdOutlineAdd size={30} />
            </div>
          </Link>
        )}

        {/* <Link
          to="/notifications"
          title="Notifications"
          className={`${
            location.pathname === "/notifications"
              ? "text-secondary"
              : "text-primary"
          } hover:text-secondary transition-all`}
        >
          {location.pathname === "/notifications" ? (
            <MdNotifications size={26} />
          ) : (
            <MdOutlineNotificationsNone size={26} />
          )}
        </Link> */}
        <div className="text-primary hover:text-secondary cursor-not-allowed transition-all">
          <MdOutlineNotificationsNone size={26} />
        </div>
        {user ? (
          <Link
            to="/profile"
            title="Profile"
            className={`${
              location.pathname === "/profile"
                ? "text-secondary"
                : "text-primary"
            } hover:text-secondary transition-all`}
          >
            {location.pathname === "/profile" ? (
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
              location.pathname === "/profile"
                ? "text-secondary"
                : "text-primary"
            } hover:text-secondary transition-all`}
          >
            {location.pathname === "/profile" ? (
              <MdPerson size={30} />
            ) : (
              <MdOutlinePersonOutline size={30} />
            )}
          </Link>
        )}
      </div>
    </m.div>
  );
};

export default BottomNav;
