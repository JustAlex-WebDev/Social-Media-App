import React from "react";
import { motion as m } from "framer-motion";
import IndividualPost from "./IndividualPost";

const Posts = ({ posts }) => {
  return (
    <div className="bg-primary w-full">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative my-12 h-full w-full max-w-[390px] m-auto bg-primary p-8 flex flex-col justify-center items-center gap-12 text-primary"
      >
        {posts?.map((post) => (
          <IndividualPost key={post?.id} post={post} />
        ))}
      </m.div>
    </div>
  );
};

export default Posts;
