import React, { useEffect, useState } from "react";
import { useAuth, useLogout } from "../hooks/auth";
import { BiEdit } from "react-icons/bi";
import { MdOutlineExitToApp } from "react-icons/md";
import { LiaUserEditSolid } from "react-icons/lia";
import { useUpdateAvatar } from "../hooks/users";

const ProfileMenu = ({ profileMenu, setProfileMenu }) => {
  const { user, isLoading } = useAuth();
  const { file, setFile, updateAvatar } = useUpdateAvatar(user?.id);
  const { logout } = useLogout();

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  useEffect(() => {
    updateAvatar();
  }, [file, updateAvatar]);

  if (isLoading) return null;

  return (
    <>
      <div
        onClick={() => setProfileMenu(false)}
        className={`${
          profileMenu ? "h-full" : "h-0 delay-[250ms]"
        } bg-modal fixed top-0 left-0 w-full z-50`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${
            profileMenu ? "h-1/3 opacity-100" : "h-0 opacity-0"
          } bg-black text-white absolute bottom-0 left-0 px-4 py-8 w-full rounded-tl-3xl rounded-tr-3xl flex flex-col justify-between overflow-hidden duration-300 ease-in-out z-50`}
        >
          {/* Profile Menu Handle */}
          <div
            className={`${
              profileMenu ? "opacity-100" : "opacity-0"
            } w-full flex justify-center items-center delay-150 duration-300 ease-in-out`}
          >
            <div
              title="CLose Menu"
              onTouchStart={() => setProfileMenu(false)}
              onMouseDown={() => setProfileMenu(false)}
              className="w-1/4 h-2 bg-white rounded-full cursor-pointer hover:opacity-50 duration-300 ease-in-out"
            ></div>
          </div>

          {/* Profile Menu Functionalities */}
          <div className="w-full flex flex-col justify-center gap-8 text-lg font-semibold">
            <div
              className={`${
                profileMenu ? "opacity-100" : "opacity-0"
              } flex items-center gap-2 delay-200 duration-300 ease-in-out`}
            >
              <label
                htmlFor="avatar"
                title="Update Avatar"
                className="flex items-center gap-2 cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
              >
                <LiaUserEditSolid size={22} />
                <span>Update Avatar</span>
                <input
                  id="avatar"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div
              className={`${
                profileMenu ? "opacity-100" : "opacity-0"
              } flex items-center gap-2 delay-200 duration-300 ease-in-out`}
            >
              <div
                title="Change Username"
                className="flex items-center gap-2 cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
              >
                <BiEdit size={22} />
                <span>Change Username</span>
              </div>
            </div>
            <div
              className={`${
                profileMenu ? "opacity-100" : "opacity-0"
              } flex items-center gap-2 delay-200 duration-300 ease-in-out`}
            >
              <div
                title="Change Caption"
                className="flex items-center gap-2 cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
              >
                <BiEdit size={22} />
                <span>Change Caption</span>
              </div>
            </div>
            <div
              className={`${
                profileMenu ? "opacity-100" : "opacity-0"
              } flex items-center gap-2 delay-[250ms] duration-300 ease-in-out`}
            >
              <div
                title="Sign Out"
                onClick={logout}
                className="flex items-center gap-2 cursor-pointer hover:text-orange-600 duration-300 ease-in-out"
              >
                <MdOutlineExitToApp size={22} />
                <span>Sign Out</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
