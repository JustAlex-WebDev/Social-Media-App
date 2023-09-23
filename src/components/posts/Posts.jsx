import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import IndividualPost from "./IndividualPost";
import SkeletonPost from "./SkeletonPost";

const Posts = ({ posts, isLoading }) => {
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  useEffect(() => {
    const skeletonLoadingTimeout = setInterval(() => {
      setSkeletonLoading(false);
    }, 2000);

    return () => {
      clearInterval(skeletonLoadingTimeout);
      setSkeletonLoading(true);
    };
  }, []);

  if (isLoading) return null;

  return (
    <>
      {skeletonLoading ? (
        <div className="h-full w-full max-w-[500px] m-auto bg-white p-4 grid grid-cols-2 gap-8 text-black">
          {posts.slice(0, 4).map((post) => (
            <SkeletonPost key={post?.id} post={post} />
          ))}
        </div>
      ) : (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-full w-full max-w-[500px] m-auto bg-white p-4 grid grid-cols-2 gap-8 text-black"
        >
          {posts.map((post) => (
            <IndividualPost key={post?.id} post={post} />
          ))}
        </m.div>
      )}
    </>
  );
};

export default Posts;
