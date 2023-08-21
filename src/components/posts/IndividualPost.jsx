import React from "react";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdOutlineModeComment, MdModeComment } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "../../hooks/auth";
import { useComments } from "../../hooks/comments";
import { useToggleLike, useDeletePost } from "../../hooks/posts";
import { useUser } from "../../hooks/users";

const IndividualPost = ({ post }) => {
  const { user, isLoading } = useUser(post.uid);
  const { user: authUser } = useAuth();
  const isLiked = post.likes.includes(authUser?.id);
  const { toggleLike } = useToggleLike({
    id: post.id,
    isLiked,
    uid: authUser?.id,
  });
  const { deletePost } = useDeletePost(post.id);
  const { comments } = useComments(post.id);

  if (isLoading) return null;

  return (
    <div className="w-full flex flex-col justify-center items-center pb-4 border-b border-neutral-700">
      <div className="bg-black w-full flex flex-col gap-4 z-10">
        <div className="flex justify-start items-center gap-2 group">
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
        <div className="text-justify">{post.text}</div>
        <div className="flex justify-between items-center">
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
                <IoMdHeartEmpty
                  title="Like"
                  onClick={toggleLike}
                  size={24}
                  className="cursor-pointer hover:opacity-80"
                />
              )}
              <div>{post.likes.length}</div>
            </div>
            <div className="flex justify-center items-center gap-2">
              {comments?.length === 0 ? (
                <Link to={`/comments/${post.id}`}>
                  <MdOutlineModeComment
                    title="Comments"
                    size={21}
                    className="cursor-pointer hover:opacity-80"
                  />
                </Link>
              ) : (
                <Link to={`/comments/${post.id}`}>
                  <MdModeComment
                    title="Comments"
                    size={21}
                    className="cursor-pointer hover:opacity-80 text-[#BF0000]"
                  />
                </Link>
              )}
              <div>{comments?.length}</div>
            </div>
          </div>
          <GoTrash
            title="Delete Post"
            onClick={deletePost}
            size={21}
            className="cursor-pointer hover:text-[#BF0000] duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default IndividualPost;