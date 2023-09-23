import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiMenuFill, RiArrowLeftSLine } from "react-icons/ri";
import { useSearchContext } from "../../context/SearchContext";
import NavigationMenu from "./NavigationMenu";
import SearchBar from "./SearchBar";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [navMenu, setNavMenu] = useState(false);
  const [searchTab, setSearchTab] = useState(false);
  const { searchText, setSearchText } = useSearchContext();

  useEffect(() => {
    if (location.pathname === "/search") {
      setSearchTab(true);
    }
  }, [location.pathname]);

  return (
    <>
      {location.pathname === "/signin" ||
      location.pathname === "/signup" ? null : (
        <div className="w-full max-w-[500px] m-auto p-4 bg-white flex justify-between items-center text-black">
          {searchTab ? (
            <RiArrowLeftSLine
              onClick={() =>
                setSearchTab(false) & setSearchText("") & navigate("/")
              }
              size={26}
              title="Go Back"
              className="cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
            />
          ) : (
            <RiMenuFill
              onClick={() => setNavMenu(!navMenu)}
              size={24}
              title="Open Menu"
              className="cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
            />
          )}

          {/* Navigation Bar Logo */}
          <Link
            to={"/"}
            className={`${
              searchTab ? "hidden" : "block"
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

          {/* Navigation Bar Search Bar */}
          <SearchBar
            searchTab={searchTab}
            setSearchTab={setSearchTab}
            searchText={searchText}
            setSearchText={setSearchText}
          />

          {/* Navigation Bar Menu */}
          <NavigationMenu
            navMenu={navMenu}
            setNavMenu={setNavMenu}
            location={location}
          />

          {/* <TopNav />
          <BottomNav /> */}
        </div>
      )}
    </>
  );
};

export default Navigation;
