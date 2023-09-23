import React from "react";
import { Link } from "react-router-dom";
import {
  RiSearchLine,
  RiCloseFill,
  RiHome2Line,
  RiAddFill,
  RiUser3Line,
  // RiNotification4Line,
  // RiInformationLine,
} from "react-icons/ri";
import { MdOutlineExitToApp, MdOutlineLogin } from "react-icons/md";
import { useAuth, useLogout } from "../../hooks/auth";

const NavigationMenu = ({ navMenu, setNavMenu, location }) => {
  const { logout } = useLogout();
  const { user, isLoading } = useAuth();

  if (isLoading) return null;

  return (
    <div
      className={`${
        navMenu ? "left-0" : "-left-[100%]"
      } bg-white absolute top-0 p-4 w-full h-screen flex justify-center items-center overflow-hidden duration-1000 ease-in-out z-50`}
    >
      {/* Navigation Bar Menu Handle */}
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

      {/* Navigation Bar Menu Links */}
      <div className="flex flex-col justify-center items-start gap-12 text-2xl font-semibold tracking-widest">
        {/* Home */}
        <Link
          to={"/"}
          title="Home"
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
        {/* Search */}
        <Link
          to={"/search"}
          title="Search"
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
        {/* Post */}
        <Link
          to={"/post"}
          title="Post"
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
                location.pathname === "/post" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[200ms] ease-in`}
            >
              P
            </span>
            <span
              className={`${
                location.pathname === "/post" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[300ms] ease-in`}
            >
              O
            </span>
            <span
              className={`${
                location.pathname === "/post" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[400ms] ease-in`}
            >
              S
            </span>
            <span
              className={`${
                location.pathname === "/post" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[500ms] ease-in`}
            >
              T
            </span>
          </div>
        </Link>
        {/* Profile */}
        <Link
          to={"/profile"}
          title="Profile"
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
                location.pathname === "/profile" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[200ms] ease-in`}
            >
              P
            </span>
            <span
              className={`${
                location.pathname === "/profile" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[300ms] ease-in`}
            >
              R
            </span>
            <span
              className={`${
                location.pathname === "/profile" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[400ms] ease-in`}
            >
              O
            </span>
            <span
              className={`${
                location.pathname === "/profile" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[500ms] ease-in`}
            >
              F
            </span>
            <span
              className={`${
                location.pathname === "/profile" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[600ms] ease-in`}
            >
              I
            </span>
            <span
              className={`${
                location.pathname === "/profile" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[700ms] ease-in`}
            >
              L
            </span>
            <span
              className={`${
                location.pathname === "/profile" ? "opacity-100" : "opacity-50"
              } group-hover:opacity-100 duration-150 delay-[800ms] ease-in`}
            >
              E
            </span>
          </div>
        </Link>
        {/* Sing Out / Sign In */}
        {user?.id ? (
          <div
            title="Sign Out"
            onClick={() => setNavMenu(false) & logout()}
            className="group text-black flex justify-center items-center gap-4 cursor-pointer duration-300 ease-in-out relative"
          >
            <div
              className={`${
                navMenu ? "-right-[300%] delay-[1000ms]" : "right-0 delay-0"
              } bg-white w-full h-full absolute top-0 duration-500 z-10`}
            ></div>
            <MdOutlineExitToApp
              size={24}
              className="opacity-50 group-hover:opacity-100 duration-150 delay-[100ms] ease-in"
            />
            <div className="flex justify-center items-center gap-2">
              <div>
                <span
                  className={`${
                    location.pathname === "/search"
                      ? "opacity-100"
                      : "opacity-50"
                  } group-hover:opacity-100 duration-150 delay-[200ms] ease-in`}
                >
                  S
                </span>
                <span
                  className={`${
                    location.pathname === "/search"
                      ? "opacity-100"
                      : "opacity-50"
                  } group-hover:opacity-100 duration-150 delay-[300ms] ease-in`}
                >
                  I
                </span>
                <span
                  className={`${
                    location.pathname === "/search"
                      ? "opacity-100"
                      : "opacity-50"
                  } group-hover:opacity-100 duration-150 delay-[400ms] ease-in`}
                >
                  G
                </span>
                <span
                  className={`${
                    location.pathname === "/search"
                      ? "opacity-100"
                      : "opacity-50"
                  } group-hover:opacity-100 duration-150 delay-[500ms] ease-in`}
                >
                  N
                </span>
              </div>
              <div>
                <span
                  className={`${
                    location.pathname === "/search"
                      ? "opacity-100"
                      : "opacity-50"
                  } group-hover:opacity-100 duration-150 delay-[600ms] ease-in`}
                >
                  O
                </span>
                <span
                  className={`${
                    location.pathname === "/search"
                      ? "opacity-100"
                      : "opacity-50"
                  } group-hover:opacity-100 duration-150 delay-[700ms] ease-in`}
                >
                  U
                </span>
                <span
                  className={`${
                    location.pathname === "/search"
                      ? "opacity-100"
                      : "opacity-50"
                  } group-hover:opacity-100 duration-150 delay-[800ms] ease-in`}
                >
                  T
                </span>
              </div>
            </div>
          </div>
        ) : (
          <Link
            to={"/signin"}
            title="Sign In"
            onClick={() => setNavMenu(false)}
            className={`${
              location.pathname === "/signin" ? "text-orange-600" : "text-black"
            } group flex justify-center items-center gap-4 duration-300 ease-in-out relative`}
          >
            <div
              className={`${
                navMenu ? "-right-[300%] delay-[1000ms]" : "right-0 delay-0"
              } bg-white w-full h-full absolute top-0 duration-500 z-10`}
            ></div>
            <MdOutlineLogin
              size={24}
              className="opacity-50 group-hover:opacity-100 duration-150 delay-[100ms] ease-in"
            />
            <div className="flex justify-center items-center gap-2">
              <div>
                <span
                  className={`${
                    location.pathname === "/search"
                      ? "opacity-100"
                      : "opacity-50"
                  } group-hover:opacity-100 duration-150 delay-[200ms] ease-in`}
                >
                  S
                </span>
                <span
                  className={`${
                    location.pathname === "/search"
                      ? "opacity-100"
                      : "opacity-50"
                  } group-hover:opacity-100 duration-150 delay-[300ms] ease-in`}
                >
                  I
                </span>
                <span
                  className={`${
                    location.pathname === "/search"
                      ? "opacity-100"
                      : "opacity-50"
                  } group-hover:opacity-100 duration-150 delay-[400ms] ease-in`}
                >
                  G
                </span>
                <span
                  className={`${
                    location.pathname === "/search"
                      ? "opacity-100"
                      : "opacity-50"
                  } group-hover:opacity-100 duration-150 delay-[500ms] ease-in`}
                >
                  N
                </span>
              </div>
              <div>
                <span
                  className={`${
                    location.pathname === "/search"
                      ? "opacity-100"
                      : "opacity-50"
                  } group-hover:opacity-100 duration-150 delay-[600ms] ease-in`}
                >
                  I
                </span>
                <span
                  className={`${
                    location.pathname === "/search"
                      ? "opacity-100"
                      : "opacity-50"
                  } group-hover:opacity-100 duration-150 delay-[700ms] ease-in`}
                >
                  N
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Activity */}
        {/* <Link
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
        </Link> */}
        {/* About */}
        {/* <Link
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
        </Link> */}
      </div>
    </div>
  );
};

export default NavigationMenu;
