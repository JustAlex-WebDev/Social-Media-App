import React from "react";
import IndividualPost from "../components/IndividualPost";

const Home = () => {
  return (
    <div className="relative my-20 h-full w-full max-w-[1140px] m-auto bg-black p-8 flex flex-col justify-center items-center gap-12 text-white">
      <IndividualPost />
      <IndividualPost />
      <IndividualPost />
      <IndividualPost />
      <IndividualPost />
      <IndividualPost />
    </div>
  );
};

export default Home;
