import React from "react";
import { motion as m } from "framer-motion";
import IndividualPost from "./IndividualPost";

const Posts = ({ posts }) => {
  return (
    <div className="bg-white w-full">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="h-full w-full max-w-[500px] m-auto bg-white p-4 grid grid-cols-2 gap-8 text-black"
      >
        {posts?.map((post) => (
          <IndividualPost key={post?.id} post={post} />
        ))}
      </m.div>
    </div>
  );
};

export default Posts;
