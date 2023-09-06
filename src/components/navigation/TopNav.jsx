import React from "react";
import { Link } from "react-router-dom";
import { useAuth, useLogout } from "../../hooks/auth";
import { MdOutlineExitToApp } from "react-icons/md";

const TopNav = () => {
  const { logout } = useLogout();
  const { user, isLoading } = useAuth();

  if (isLoading) return null;

  return (
    <div className="z-50 fixed top-0 left-0 w-full bg-gradient-to-b from-black to-100%">
      <div className="max-w-[390px] m-auto px-8 h-20 bg-gradient-to-b from-black to-100% flex justify-between items-center">
        <Link
          to="/"
          title="Home"
          className="text-secondary text-4xl font-bold tracking-wider hover:opacity-80"
        >
          REV
        </Link>
        {user?.id ? (
          <MdOutlineExitToApp
            size={28}
            title="Sign Out"
            onClick={logout}
            className="text-secondary cursor-pointer hover:opacity-80"
          />
        ) : (
          <div className="flex justify-center items-center gap-6">
            <Link
              to="/signin"
              className="text-secondary font-extrabold tracking-wider hover:opacity-80 text-sm"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="text-primary font-semibold tracking-wider hover:opacity-80 text-sm"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
