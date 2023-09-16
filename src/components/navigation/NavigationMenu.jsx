import React from "react";
import { Link } from "react-router-dom";
import {
  RiSearchLine,
  RiCloseFill,
  RiHome2Line,
  RiAddFill,
  RiUser3Line,
  RiNotification4Line,
  RiInformationLine,
} from "react-icons/ri";

const NavigationMenu = ({ navMenu, setNavMenu, location }) => {
  return (
    <div
      className={`${
        navMenu ? "left-0" : "-left-[100%]"
      } bg-white absolute top-0 p-4 w-full h-screen flex justify-center items-center overflow-hidden duration-1000 ease-in-out z-50`}
    >
      <div
        onClick={() => setNavMenu(false)}
        title="Close Menu"
        className={`${
          navMenu ? "opacity-100 delay-500" : "opacity-0 delay-0"
        } absolute top-5 right-4 cursor-pointer duration-500`}
      >
        <RiCloseFill
          size={26}
          className="hover:text-orange-600 duration-300 ease-in-out"
        />
      </div>

      {/* Links */}
      <div className="flex flex-col justify-center items-start gap-12 text-2xl font-semibold tracking-widest">
        <Link
          to={"/"}
          onClick={() => setNavMenu(false)}
          className={`${
            location.pathname === "/" ? "text-orange-600" : "text-black"
          } group flex justify-center items-center gap-4 duration-300 ease-in-out relative`}
        >
          <div
            className={`${
              navMenu ? "-right-[300%] delay-[600ms]" : "right-0 delay-0"
            } bg-white w-full h-full absolute top-0 duration-500 z-10`}
          ></div>
          <RiHome2Line
            size={24}
            className={`${
              location.pathname === "/" ? "opacity-100" : "opacity-50"
            } group-hover:opacity-100 duration-150 delay-[100ms] ease-in`}
          />
          <div>
            <span
              className={`${
                location.pathname === "/" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[200ms] ease-in`}
            >
              H
            </span>
            <span
              className={`${
                location.pathname === "/" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[300ms] ease-in`}
            >
              O
            </span>
            <span
              className={`${
                location.pathname === "/" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[400ms] ease-in`}
            >
              M
            </span>
            <span
              className={`${
                location.pathname === "/" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[500ms] ease-in`}
            >
              E
            </span>
          </div>
        </Link>
        <Link
          to={"/search"}
          onClick={() => setNavMenu(false)}
          className={`${
            location.pathname === "/search" ? "text-orange-600" : "text-black"
          } group flex justify-center items-center gap-4 duration-300 ease-in-out relative`}
        >
          <div
            className={`${
              navMenu ? "-right-[300%] delay-[700ms]" : "right-0 delay-0"
            }  bg-white w-full h-full absolute top-0 duration-500 z-10`}
          ></div>
          <RiSearchLine
            size={22}
            className={`${
              location.pathname === "/search" ? "opacity-100" : "opacity-50"
            } group-hover:opacity-100 duration-150 delay-[100ms] ease-in`}
          />
          <div>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[200ms] ease-in`}
            >
              S
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[300ms] ease-in`}
            >
              E
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[400ms] ease-in`}
            >
              A
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[500ms] ease-in`}
            >
              R
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[600ms] ease-in`}
            >
              C
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[700ms] ease-in`}
            >
              H
            </span>
          </div>
        </Link>
        <Link
          to={"/post"}
          onClick={() => setNavMenu(false)}
          className={`${
            location.pathname === "/post" ? "text-orange-600" : "text-black"
          } group flex justify-center items-center gap-4 duration-300 ease-in-out relative`}
        >
          <div
            className={`${
              navMenu ? "-right-[300%] delay-[800ms]" : "right-0 delay-0"
            } bg-white w-full h-full absolute top-0 duration-500 z-10`}
          ></div>
          <RiAddFill
            size={26}
            className={`${
              location.pathname === "/post" ? "opacity-100" : "opacity-50"
            } group-hover:opacity-100 duration-150 delay-[100ms] ease-in`}
          />
          <div>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[200ms] ease-in`}
            >
              P
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[300ms] ease-in`}
            >
              O
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[400ms] ease-in`}
            >
              S
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[500ms] ease-in`}
            >
              T
            </span>
          </div>
        </Link>
        <Link
          to={"/profile"}
          onClick={() => setNavMenu(false)}
          className={`${
            location.pathname === "/profile" ? "text-orange-600" : "text-black"
          } group flex justify-center items-center gap-4 duration-300 ease-in-out relative`}
        >
          <div
            className={`${
              navMenu ? "-right-[300%] delay-[900ms]" : "right-0 delay-0"
            } bg-white w-full h-full absolute top-0 duration-500 z-10`}
          ></div>
          <RiUser3Line
            size={24}
            className={`${
              location.pathname === "/profile" ? "opacity-100" : "opacity-50"
            } group-hover:opacity-100 duration-150 delay-[100ms] ease-in`}
          />
          <div>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[200ms] ease-in`}
            >
              P
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[300ms] ease-in`}
            >
              R
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[400ms] ease-in`}
            >
              O
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[500ms] ease-in`}
            >
              F
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[600ms] ease-in`}
            >
              I
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[700ms] ease-in`}
            >
              L
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[800ms] ease-in`}
            >
              E
            </span>
          </div>
        </Link>
        <Link
          to={"/activity"}
          onClick={() => setNavMenu(false)}
          className={`${
            location.pathname === "/activity" ? "text-orange-600" : "text-black"
          } group flex justify-center items-center gap-4 duration-300 ease-in-out relative`}
        >
          <div
            className={`${
              navMenu ? "-right-[300%] delay-[1000ms]" : "right-0 delay-0"
            } bg-white w-full h-full absolute top-0 duration-500 z-10`}
          ></div>
          <RiNotification4Line
            size={22}
            className={`${
              location.pathname === "/activity" ? "opacity-100" : "opacity-50"
            } group-hover:opacity-100 duration-150 delay-[100ms] ease-in`}
          />
          <div>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[200ms] ease-in`}
            >
              A
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[300ms] ease-in`}
            >
              C
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[400ms] ease-in`}
            >
              T
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[500ms] ease-in`}
            >
              I
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[600ms] ease-in`}
            >
              V
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[700ms] ease-in`}
            >
              I
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[800ms] ease-in`}
            >
              T
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[900ms] ease-in`}
            >
              Y
            </span>
          </div>
        </Link>
        <Link
          to={"/about"}
          onClick={() => setNavMenu(false)}
          className={`${
            location.pathname === "/about" ? "text-orange-600" : "text-black"
          } group flex justify-center items-center gap-4 duration-300 ease-in-out relative`}
        >
          <div
            className={`${
              navMenu ? "-right-[300%] delay-[1100ms]" : "right-0 delay-0"
            } bg-white w-full h-full absolute top-0 duration-500 z-10`}
          ></div>
          <RiInformationLine
            size={24}
            className={`${
              location.pathname === "/about" ? "opacity-100" : "opacity-50"
            } group-hover:opacity-100 duration-150 delay-[100ms] ease-in`}
          />
          <div>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[200ms] ease-in`}
            >
              A
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[300ms] ease-in`}
            >
              B
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[400ms] ease-in`}
            >
              O
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[500ms] ease-in`}
            >
              U
            </span>
            <span
              className={`${
                location.pathname === "/search" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[600ms] ease-in`}
            >
              T
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavigationMenu;
