import React from "react";
import { Link, useParams } from "react-router-dom";
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

  if (userLoading) return null;

  return (
    <>
      <PageTransition />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="bg-black w-full max-w-[1140px] m-auto mt-32 black p-8 flex flex-col justify-center items-center gap-4 text-white"
      >
        <img
          title="Profile"
          src={user.avatar}
          alt="https://i.pinimg.com/originals/f8/fd/fd/f8fdfde70bd8bd51925808dd6a792024.jpg"
          className="w-32 h-32 bg-black border-[#BF0000] border-2 rounded-full hover:cursor-pointer hover:opacity-80 object-cover"
        />
        <div className="text-xl font-semibold capitalize">{user.username}</div>
        <div className="py-8 flex flex-col justify-center items-center gap-4 font-semibold">
          <div>Posts: {posts?.length}</div>
          <div>Likes: todo!</div>
          <div>Joined: {format(user.date, "MMMM YYY")}</div>
        </div>
        {postsLoading ? <div>Posts are loading!</div> : <Posts posts={posts} />}
      </m.div>
    </>
  );
};

export default UserProfile;
