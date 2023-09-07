import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdOutlineModeComment, MdModeComment } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "../../hooks/auth";
import { useComments } from "../../hooks/comments";
import { useToggleLike, useDeletePost } from "../../hooks/posts";
import { useUser } from "../../hooks/users";

const IndividualPost = ({ post }) => {
  const { user, isLoading: userLoading } = useUser(post?.uid);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const isLiked = post.likes.includes(authUser?.id);
  const { toggleLike } = useToggleLike({
    id: post.id,
    isLiked,
    uid: authUser?.id,
  });
  const { deletePost } = useDeletePost(post.id);
  const [openPic, setOpenPic] = useState(false);
  const { comments } = useComments(post.id);
  const location = useLocation();

  if (userLoading || authLoading) return null;

  return (
    <div
      onClick={() => setOpenPic(false)}
      className="w-full flex flex-col justify-center items-center"
    >
      <div className="w-full flex flex-col gap-4 z-10">
        <div
          className={`${
            openPic ? "opacity-20" : null
          } flex justify-start items-center gap-2 duration-300 ease-in-out group`}
        >
          <Link to={`/profile/${user.id}`}>
            <img
              title="See Profile"
              src={user.avatar}
              alt="https://i.pinimg.com/originals/f8/fd/fd/f8fdfde70bd8bd51925808dd6a792024.jpg"
              className="w-11 h-11 bg-black border-white hover:border-[#BF0000] border-2 rounded-full object-cover duration-300 ease-in-out"
            />
          </Link>
          <div className="flex flex-col justify-center items-left">
            <Link
              to={`/profile/${user.id}`}
              title="See Profile"
              className="text-lg font-semibold capitalize"
            >
              {user.username}
            </Link>
            <div className="opacity-80 text-sm">
              {formatDistanceToNow(post.date)} ago
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div
            className={`${
              openPic ? "opacity-20" : null
            } overflow-hidden h-auto duration-300 ease-in-out`}
          >
            {post.text}
          </div>
          {post.picture === "" ? null : (
            <img
              src={post.picture}
              alt=""
              onClick={(e) => e.stopPropagation() & setOpenPic(!openPic)}
              className={`${
                openPic ? "rounded-none" : "rounded-2xl"
              } w-full h-auto cursor-pointer duration-300 ease-in-out select-none`}
            />
          )}
          <div
            className={`${
              openPic ? "opacity-20" : null
            } flex gap-2 duration-300 ease-in-out`}
          >
            <div className="font-semibold">{user.username}</div>
            <span>-</span>
            <div className="overflow-hidden h-auto">{post.caption}</div>
          </div>
        </div>
        <div
          className={`${
            openPic ? "opacity-20" : null
          } flex justify-between items-center duration-300 ease-in-out`}
        >
          <div className="flex justify-start items-center gap-6">
            <div className="flex justify-center items-center gap-2">
              {isLiked ? (
                <IoMdHeart
                  title="Unlike"
                  onClick={toggleLike}
                  size={24}
                  className="cursor-pointer hover:opacity-80 text-[#BF0000]"
                />
              ) : (
                <>
                  {authUser ? (
                    <IoMdHeartEmpty
                      title="Like"
                      onClick={toggleLike}
                      size={24}
                      className="cursor-pointer hover:opacity-80"
                    />
                  ) : (
                    <IoMdHeartEmpty
                      title="Like"
                      onClick={() => alert("Please sign in to be able to like")}
                      size={24}
                      className="cursor-pointer hover:opacity-80"
                    />
                  )}
                </>
              )}
              <div>{post.likes.length}</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              {comments?.length === 0 ? (
                <>
                  {authUser ? (
                    <Link to={`/comments/${post.id}`}>
                      <MdOutlineModeComment
                        title="Comments"
                        size={21}
                        className="cursor-pointer hover:opacity-80"
                      />
                    </Link>
                  ) : (
                    <Link to="/signin">
                      <MdOutlineModeComment
                        title="Comments"
                        size={21}
                        className="cursor-pointer hover:opacity-80"
                      />
                    </Link>
                  )}
                </>
              ) : (
                <>
                  {authUser ? (
                    <Link to={`/comments/${post.id}`}>
                      <MdModeComment
                        title="Comments"
                        size={21}
                        className="cursor-pointer hover:opacity-80 text-[#BF0000]"
                      />
                    </Link>
                  ) : (
                    <Link to="/signin">
                      <MdModeComment
                        title="Comments"
                        size={21}
                        className="cursor-pointer hover:opacity-80 text-[#BF0000]"
                      />
                    </Link>
                  )}
                </>
              )}
              <div>{comments?.length}</div>
            </div>
          </div>
          {!authLoading && authUser?.id === post?.uid && (
            <>
              {location.pathname !== "/" ? null : (
                <GoTrash
                  size={21}
                  onClick={deletePost}
                  title="Delete Post"
                  className="cursor-pointer hover:text-[#BF0000] duration-300 ease-in-out"
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndividualPost;
