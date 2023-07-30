import React from "react";
import IndividualPost from "../components/IndividualPost";

const Home = () => {
  return (
    <div className="w-full my-20 bg-black">
      <div className="h-full w-full max-w-[1140px] m-auto bg-black p-8 flex flex-col justify-between items-center gap-12 text-white">
        <IndividualPost />
        <IndividualPost />
        <IndividualPost />
        <IndividualPost />
        <IndividualPost />
        <IndividualPost />
      </div>
    </div>
  );
};

export default Home;
