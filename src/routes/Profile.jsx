import React from "react";
import PageTransition from "../components/PageTransition";
import { motion as m } from "framer-motion";
import { useLogout } from "../hooks/auth";

const Profile = () => {
  const { logout, isLoading } = useLogout();

  return (
    <>
      <PageTransition />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative bg-black h-screen w-full max-w-[1140px] m-auto black p-8 flex flex-col justify-center items-center gap-4 text-white"
      >
        <div
          title="Profile"
          className="w-32 h-32 bg-black border-[#BF0000] border-2 rounded-full hover:cursor-pointer hover:opacity-80"
        ></div>
        <div className="text-xl font-semibold">Username</div>
        <div className="py-8 flex flex-col justify-center items-center gap-4 font-semibold">
          <div>Posts: 1</div>
          <div>Likes: todo!</div>
          <div>Joined: November 2022</div>
        </div>
        <div className="bg-black font-semibold border-2 border-white p-2 px-4 text-center rounded-2xl cursor-pointer hover:opacity-80">
          Edit Profile
        </div>
        <div
          onClick={logout}
          className="font-semibold p-2 px-4 text-center rounded-2xl bg-black border-2 border-[#BF0000] hover:bg-[#BF0000] cursor-pointer"
        >
          {isLoading ? (
            <span className="animate-pulse">Loading...</span>
          ) : (
            <soan>Sign Out</soan>
          )}
        </div>
      </m.div>
    </>
  );
};

export default Profile;
