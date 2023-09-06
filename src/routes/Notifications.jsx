import React from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineModeComment } from "react-icons/md";
import PageTransition from "../components/PageTransition";

const Notifications = () => {
  return (
    <>
      <PageTransition />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative my-20 bg-black h-full w-full max-w-[390px] m-auto black p-8 flex flex-col justify-between items-center gap-8"
      >
        <Link
          to="/"
          className="w-full max-w-[30rem] h-12 flex justify-between items-center gap-4 px-8 bg-black border-2 border-[#BF0000] rounded-3xl text-center text-white cursor-pointer hover:opacity-80"
        >
          <IoMdHeartEmpty size={22} />
          <div className="font-semibold text-sm sm:text-base">
            Bobi liked your post
          </div>
          <IoMdHeartEmpty size={22} />
        </Link>
        <Link
          to="/"
          className="w-full max-w-[30rem] h-12 flex justify-between items-center gap-4 px-8 bg-black border-2 border-[#BF0000] rounded-3xl text-center text-white cursor-pointer hover:opacity-80"
        >
          <MdOutlineModeComment size={20} />
          <div className="font-semibold text-sm sm:text-base">
            Bobi commented on your post
          </div>
          <MdOutlineModeComment size={20} />
        </Link>
        <Link
          to="/"
          className="w-full max-w-[30rem] h-12 flex justify-between items-center gap-4 px-8 bg-black border-2 border-[#BF0000] rounded-3xl text-center text-white cursor-pointer hover:opacity-80"
        >
          <IoMdHeartEmpty size={22} />
          <div className="font-semibold text-sm sm:text-base">
            Bobi liked your post
          </div>
          <IoMdHeartEmpty size={22} />
        </Link>
        <Link
          to="/"
          className="w-full max-w-[30rem] h-12 flex justify-between items-center gap-4 px-8 bg-black border-2 border-[#BF0000] rounded-3xl text-center text-white cursor-pointer hover:opacity-80"
        >
          <MdOutlineModeComment size={20} />
          <div className="font-semibold text-sm sm:text-base">
            Bobi commented on your post
          </div>
          <MdOutlineModeComment size={20} />
        </Link>
        <Link
          to="/"
          className="w-full max-w-[30rem] h-12 flex justify-between items-center gap-4 px-8 bg-black border-2 border-[#BF0000] rounded-3xl text-center text-[#BF0000] cursor-pointer hover:opacity-80"
        >
          <IoMdHeartEmpty size={22} />
          <div className="font-semibold text-sm sm:text-base">
            Bobi liked your post
          </div>
          <IoMdHeartEmpty size={22} />
        </Link>
        <Link
          to="/"
          className="w-full max-w-[30rem] h-12 flex justify-between items-center gap-4 px-8 bg-black border-2 border-[#BF0000] rounded-3xl text-center text-[#BF0000] cursor-pointer hover:opacity-80"
        >
          <MdOutlineModeComment size={20} />
          <div className="font-semibold text-sm sm:text-base">
            Bobi commented on your post
          </div>
          <MdOutlineModeComment size={20} />
        </Link>
        <Link
          to="/"
          className="w-full max-w-[30rem] h-12 flex justify-between items-center gap-4 px-8 bg-black border-2 border-[#BF0000] rounded-3xl text-center text-[#BF0000] cursor-pointer hover:opacity-80"
        >
          <IoMdHeartEmpty size={22} />
          <div className="font-semibold text-sm sm:text-base">
            Bobi liked your post
          </div>
          <IoMdHeartEmpty size={22} />
        </Link>
        <Link
          to="/"
          className="w-full max-w-[30rem] h-12 flex justify-between items-center gap-4 px-8 bg-black border-2 border-[#BF0000] rounded-3xl text-center text-[#BF0000] cursor-pointer hover:opacity-80"
        >
          <MdOutlineModeComment size={20} />
          <div className="font-semibold text-sm sm:text-base">
            Bobi commented on your post
          </div>
          <MdOutlineModeComment size={20} />
        </Link>
      </m.div>
    </>
  );
};

export default Notifications;
