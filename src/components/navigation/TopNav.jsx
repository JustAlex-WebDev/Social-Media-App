import React from "react";
import { Link } from "react-router-dom";
import { PiChatsFill } from "react-icons/pi";
import { GiGearStickPattern } from "react-icons/gi";

const TopNav = () => {
  return (
    <div className="z-50 fixed top-0 left-0 w-full bg-gradient-to-b from-black to-100%">
      <div className="max-w-[1140px] m-auto px-8 h-20 bg-gradient-to-b from-black to-100% flex justify-center items-center">
        <Link
          to="/"
          title="Home"
          className="text-secondary text-4xl font-bold tracking-wider hover:opacity-80 transition-all"
        >
          REV
        </Link>
        <Link to="/">
          {/* <PiChatsFill size={26} className="text-secondary hover:opacity-80" /> */}
          {/* <GiGearStickPattern
            size={26}
            className="text-secondary hover:opacity-80"
          /> */}
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
