import React from "react";
import PageTransition from "../components/PageTransition";
import { motion as m } from "framer-motion";

const Profile = () => {
  return (
    <>
      <PageTransition />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative my-20 bg-black h-full w-full max-w-[1140px] m-auto black p-8 flex flex-col justify-center items-center gap-4 text-white"
      >
        <div
          title="Profile"
          className="w-32 h-32 bg-black border-[#BF0000] border-2 rounded-full hover:cursor-pointer hover:opacity-80"
        ></div>
        <div className="text-xl font-semibold">Username</div>
        <div className="pt-8 flex flex-col justify-center items-center gap-4 font-semibold">
          <div>Posts: 1</div>
          <div>Likes: todo!</div>
          <div>Joined: November 2022</div>
        </div>
      </m.div>
    </>
  );
};

export default Profile;
