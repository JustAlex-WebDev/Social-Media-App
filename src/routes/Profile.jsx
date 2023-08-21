import React, { useEffect } from "react";
import { motion as m } from "framer-motion";
import { format } from "date-fns";
import { BiEdit } from "react-icons/bi";
import Posts from "../components/posts/Posts";
import PageTransition from "../components/PageTransition";
import { useAuth, useLogout } from "../hooks/auth";
import { usePosts } from "../hooks/posts";
import { useUpdateAvatar } from "../hooks/users";

const Profile = () => {
  const { logout } = useLogout();
  const { user, isLoading } = useAuth();
  const { posts, isLoading: postsLoading } = usePosts(user?.id);
  const { file, setFile, updateAvatar } = useUpdateAvatar(user?.id);
  let sumLikes = 0;

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  useEffect(() => {
    updateAvatar();
  }, [file, updateAvatar]);

  if (isLoading) return null;

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
              alt="https://i.pinimg.com/originals/f8/fd/fd/f8fdfde70bd8bd51925808dd6a792024.jpg"
              className="w-48 h-48 bg-black border-[#BF0000] border-2 rounded-full hover:opacity-80 object-cover"
            />
            <label
              htmlFor="avatar"
              title="Change Avatar"
              className="cursor-pointer opacity-0 hover:opacity-100 bg-modal w-48 h-48 absolute top-0 flex justify-center items-center rounded-full border-2 border-white duration-300 ease-in-out"
            >
              <BiEdit size={33} className="cursor-pointer" />
              <input
                id="avatar"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleChange}
              />
            </label>
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
            <div
              onClick={logout}
              className="font-semibold text-sm mt-2 px-6 py-2 text-center rounded-2xl bg-black border-y  border-[#BF0000] hover:text-[#BF0000] hover:opacity-80 cursor-pointer duration-300 ease-in-out"
            >
              Sign Out
            </div>
          </div>
        </div>
        <div className="relative mt-12 -mb-20 p-8 text-lg font-semibold z-10">
          Posts
        </div>
        {posts?.length === 0 && <div>There are no posts yet!</div>}
        {postsLoading ? <div>Posts are loading!</div> : <Posts posts={posts} />}
      </m.div>
    </>
  );
};

export default Profile;
