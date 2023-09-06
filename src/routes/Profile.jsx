import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import { format } from "date-fns";
import { BiEdit } from "react-icons/bi";
import Posts from "../components/posts/Posts";
import PageTransition from "../components/PageTransition";
import { useAuth } from "../hooks/auth";
import { usePosts } from "../hooks/posts";
import { useUpdateAvatar } from "../hooks/users";

const Profile = () => {
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

  if (user?.id) {
    return (
      <>
        <PageTransition />
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="bg-black w-full max-w-[390px] m-auto mt-24 flex flex-col justify-center items-center gap-4 text-white"
        >
          <div className="w-full flex flex-col justify-center items-center gap-8 px-8 mb-4">
            <div className="flex flex-col justify-center items-center gap-2 relative">
              <img
                src={user.avatar}
                alt="https://i.pinimg.com/originals/f8/fd/fd/f8fdfde70bd8bd51925808dd6a792024.jpg"
                className="w-48 h-48 bg-black border-[#BF0000] border-2 rounded-full object-cover"
              />
              <label
                htmlFor="avatar"
                title="Change Avatar"
                className="cursor-pointer flex justify-center items-center absolute bottom-0 right-4"
              >
                <BiEdit
                  size={33}
                  className="cursor-pointer text-secondary opacity-80 hover:opacity-100 hover:scale-110"
                />
                <input
                  id="avatar"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 font-semibold">
              <div className="text-xl font-semibold capitalize">
                {user.username}
              </div>
              <div className="w-full flex justify-center items-center gap-4">
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
              <div className="relative -mb-8 p-8 text-lg font-semibold z-10">
                Posts
              </div>
              <div>There are no posts yet</div>
            </>
          ) : (
            <>
              <div className="relative -mb-24 p-8 text-lg font-semibold z-10">
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
  } else {
    <Navigate to="/signin" />;
  }
};

export default Profile;
