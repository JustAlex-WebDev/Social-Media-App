import React from "react";
import { motion as m } from "framer-motion";

const PageTransition = () => {
  return (
    // <m.div
    // initial={{ zIndex: "50", opacity: "100%" }}
    // animate={{ zIndex: "-10", opacity: "0%" }}
    // transition={{ duration: 1, delay: 1.5 }}
    //   className="z-50 opacity-100 absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-between overflow-hidden"
    // >
    //   <m.div
    //     initial={{ translateX: "50rem" }}
    //     animate={{ translateX: "0" }}
    //     transition={{ duration: 1 }}
    //     className="border-b-2 border-[#BF0000] h-20 w-full"
    //   ></m.div>
    //   <m.div
    //     initial={{ translateX: "-50rem" }}
    //     animate={{ translateX: "0" }}
    //     transition={{ duration: 1 }}
    //     className="border-t-2 border-[#BF0000] h-20 w-full"
    //   ></m.div>
    // </m.div>
    <m.div
      initial={{ zIndex: "50", opacity: "100%", display: "block" }}
      animate={{ zIndex: "-10", opacity: "0%", display: "none" }}
      transition={{ delay: 3, duration: 1 }}
      className="w-full opacity-100 h-screen flex flex-col justify-between overflow-hidden"
    >
      <m.div
        initial={{ top: "-50rem" }}
        animate={{ top: "0rem" }}
        transition={{ duration: 1 }}
        className="z-50 absolute w-full h-1/2 bg-primary"
      >
        <div className="w-full h-full relative flex justify-center items-center">
          <m.div
            initial={{ width: "100%" }}
            animate={{ width: "50%" }}
            transition={{ delay: 1, duration: 1 }}
            className="h-1 bg-secondary absolute bottom-0 rounded-t-full"
          ></m.div>
        </div>
      </m.div>
      <m.div
        initial={{ bottom: "-50rem" }}
        animate={{ bottom: "0rem" }}
        transition={{ duration: 1 }}
        className="z-50 absolute left-0 w-full h-1/2 bg-primary"
      >
        <div className="w-full h-full relative flex justify-center items-center">
          <m.div
            initial={{ width: "100%" }}
            animate={{ width: "50%" }}
            transition={{ delay: 1, duration: 1 }}
            className="bg-secondary absolute top-0 rounded-b-full"
          ></m.div>
        </div>
      </m.div>
    </m.div>
  );
};

export default PageTransition;
