import React from "react";
import IndividualPost from "../components/IndividualPost";
import PageTransition from "../components/PageTransition";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <>
      <PageTransition />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative my-20 h-full w-full max-w-[1140px] m-auto bg-black p-8 flex flex-col justify-center items-center gap-12 text-white"
      >
        <IndividualPost />
        <IndividualPost />
        <IndividualPost />
        <IndividualPost />
        <IndividualPost />
        <IndividualPost />
      </m.div>
    </>
  );
};

export default Home;
