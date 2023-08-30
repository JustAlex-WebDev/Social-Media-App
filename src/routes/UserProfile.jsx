import React from "react";
import { useParams } from "react-router-dom";
import { motion as m } from "framer-motion";
import { format } from "date-fns";
import PageTransition from "../components/PageTransition";
import Posts from "../components/posts/Posts";
import { usePosts } from "../hooks/posts";
import { useUser } from "../hooks/users";

const UserProfile = () => {
  const { id } = useParams();
  const { posts, isLoading: postsLoading } = usePosts(id);
  const { user, isLoading: userLoading } = useUser(id);
  let sumLikes = 0;

  if (userLoading) return null;

  return (
    <>
      <PageTransition />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="bg-black w-full max-w-[1140px] m-auto mt-32 flex flex-col justify-center items-center gap-4 text-white"
      >
        <div className="relative w-full flex flex-col xs:flex-row justify-center items-center gap-8 px-8">
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              src={user.avatar}
              alt=""
              className="w-48 h-48 bg-black border-[#BF0000] border-2 rounded-full hover:opacity-80 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center xs:items-start gap-4 font-semibold">
            <div className="text-xl font-semibold capitalize">
              {user.username}
            </div>
            <div className="w-full flex justify-center xs:justify-start items-center gap-4">
              <div>Posts: {posts?.length}</div>
              <div className="hidden">
                {posts?.map((post) => {
                  return (sumLikes += post?.likes?.length);
                })}
              </div>
              <div>Likes: {sumLikes}</div>
            </div>
            <div>Joined: {format(user.date, "MMMM YYY")}</div>
          </div>
        </div>
        {posts?.length === 0 ? (
          <>
            <div className="relative mt-12 -mb-8 p-8 text-lg font-semibold z-10">
              Posts
            </div>
            <div>There are no posts yet</div>
          </>
        ) : (
          <>
            <div className="relative mt-12 -mb-28 p-8 text-lg font-semibold z-10">
              Posts
            </div>
            {postsLoading ? (
              <div>Posts are loading!</div>
            ) : (
              <Posts posts={posts} />
            )}
          </>
        )}
      </m.div>
    </>
  );
};

export default UserProfile;
