import React, { lazy, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiMenuFill, RiArrowLeftSLine } from "react-icons/ri";
import { BsPersonGear } from "react-icons/bs";
import { useSearchContext } from "../../context/SearchContext";
import NavigationMenu from "./NavigationMenu";
import SearchBar from "./SearchBar";
import ProfileMenu from "../ProfileMenu";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [navMenu, setNavMenu] = useState(false);
  const [searchTab, setSearchTab] = useState(false);
  const [profileTab, setProfileTab] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const { searchText, setSearchText } = useSearchContext();

  useEffect(() => {
    if (location.pathname === "/search") {
      setSearchTab(true);
    }
    if (location.pathname === "/profile") {
      setProfileTab(true);
    }
  }, [location.pathname]);

  return (
    <>
      {location.pathname === "/signin" ||
      location.pathname === "/signup" ? null : (
        <div className="w-full max-w-[500px] m-auto p-4 bg-white flex justify-between items-center text-black">
          {searchTab || profileTab ? (
            <RiArrowLeftSLine
              onClick={() =>
                setSearchTab(false) &
                setSearchText("") &
                setProfileTab(false) &
                navigate("/")
              }
              size={26}
              title="Go to Home"
              className={`${
                profileTab ? "mt-2" : null
              } cursor-pointer hover:text-orange-600 duration-300 ease-in-out`}
            />
          ) : (
            <RiMenuFill
              onClick={() => setNavMenu(true)}
              size={24}
              title="Open Menu"
              className="cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
            />
          )}

          {/* Logo */}
          <Link
            to={"/"}
            className={`${
              searchTab || profileTab ? "hidden" : "block"
            } group text-2xl font-semibold tracking-widest`}
          >
            <span className="group-hover:text-orange-600 duration-150 ease-in">
              W
            </span>
            <span className="group-hover:text-orange-600 duration-150 delay-100 ease-in">
              O
            </span>
            <span className="group-hover:text-orange-600 duration-150 delay-200 ease-in">
              N
            </span>
            <span className="group-hover:text-orange-600 duration-150 delay-[300ms] ease-in">
              D
            </span>
            <span className="group-hover:text-orange-600 duration-150 delay-[400ms] ease-in">
              E
            </span>
            <span className="group-hover:text-orange-600 duration-150 delay-[500ms] ease-in">
              R
            </span>
            <span className="text-xs text-orange-600 font-bold">
              <span className="group-hover:text-black duration-150 delay-[600ms] ease-in">
                f
              </span>
              <span className="group-hover:text-black duration-150 delay-[700ms] ease-in">
                u
              </span>
              <span className="group-hover:text-black duration-150 delay-[800ms] ease-in">
                l
              </span>
              <span className="group-hover:text-black duration-150 delay-[900ms] ease-in">
                l
              </span>
            </span>
          </Link>

          {/* Search Bar / Profile Menu */}
          {!profileTab ? (
            <SearchBar
              searchTab={searchTab}
              setSearchTab={setSearchTab}
              searchText={searchText}
              setSearchText={setSearchText}
            />
          ) : (
            <BsPersonGear
              size={24}
              title="Options"
              onClick={() => setProfileMenu(true)}
              className={`${
                profileTab ? "opacity-100" : "opacity-0"
              } cursor-pointer hover:text-orange-600 duration-300 ease-in-out`}
            />
          )}

          {/* Menu */}
          <NavigationMenu
            navMenu={navMenu}
            setNavMenu={setNavMenu}
            location={location}
          />

          {/* Profile Menu */}
          <ProfileMenu
            profileMenu={profileMenu}
            setProfileMenu={setProfileMenu}
          />

          {/* <TopNav />
          <BottomNav /> */}
        </div>
      )}
    </>
  );
};

export default Navigation;
