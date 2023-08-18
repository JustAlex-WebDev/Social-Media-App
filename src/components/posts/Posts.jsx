import React from "react";
import { motion as m } from "framer-motion";
import IndividualPost from "./IndividualPost";

const Posts = ({ posts }) => {
  return (
    <div className="bg-black w-full">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative my-20 h-full w-full max-w-[1140px] m-auto bg-black p-8 flex flex-col justify-center items-center gap-8 text-white"
      >
        {posts?.length === 0 ? (
          <span className="font-semibold text-xl text-center">
            There are no posts yet!
          </span>
        ) : (
          posts?.map((post) => <IndividualPost key={post.id} post={post} />)
        )}
      </m.div>
    </div>
  );
};

export default Posts;
