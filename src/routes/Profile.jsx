import React from "react";
import { motion as m } from "framer-motion";
import { format } from "date-fns";
import { BiEdit } from "react-icons/bi";
import Posts from "../components/posts/Posts";
import PageTransition from "../components/PageTransition";
import { useAuth, useLogout } from "../hooks/auth";
import { usePosts } from "../hooks/posts";

const Profile = () => {
  const { logout } = useLogout();
  const { user, isLoading } = useAuth();
  const { posts, isLoading: postsLoading } = usePosts(user?.id);

  if (isLoading) return null;

  return (
    <>
      <PageTransition />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="bg-black w-full max-w-[1140px] m-auto mt-28 black p-8 flex flex-col justify-center items-center gap-4 text-white"
      >
        <div title="Chnage Avatar" className="relative group cursor-pointer">
          <img
            src={user.avatar}
            alt="https://i.pinimg.com/originals/f8/fd/fd/f8fdfde70bd8bd51925808dd6a792024.jpg"
            className="w-32 h-32 bg-black border-[#BF0000] border-2 rounded-full hover:opacity-80 object-scale-down"
          />
          <div className="opacity-0 group-hover:opacity-100 bg-modal w-32 h-32 absolute top-0 flex justify-center items-center rounded-full border-2 border-white duration-300 ease-in-out">
            <BiEdit size={28} />
          </div>
        </div>
        <div className="text-xl font-semibold capitalize">{user.username}</div>
        <div className="pt-8 pb-4 flex flex-col justify-center items-center gap-4 font-semibold">
          <div>Posts: {posts?.length}</div>
          <div>Likes: todo!</div>
          <div>Joined: {format(user.date, "MMMM YYY")}</div>
        </div>
        <div
          onClick={logout}
          className="font-semibold p-2 px-4 text-center rounded-2xl bg-black border-2 border-[#BF0000] hover:bg-[#BF0000] cursor-pointer"
        >
          Sign Out
        </div>
        {postsLoading ? <div>Posts are loading!</div> : <Posts posts={posts} />}
      </m.div>
    </>
  );
};

export default Profile;
