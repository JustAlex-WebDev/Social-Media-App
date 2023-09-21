import React from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdOutlineModeComment } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import { GoTrash } from "react-icons/go";
import { Link } from "react-router-dom";

const PostMenu = ({
  post,
  postMenu,
  setPostMenu,
  isLiked,
  toggleLike,
  user,
  authUser,
  authLoading,
  deletePost,
}) => {
  if (authLoading) return null;

  return (
    <div
      onClick={() => setPostMenu(false)}
      className={`${
        postMenu ? "h-full" : "h-0 delay-150"
      } bg-modal fixed top-0 left-0 w-full`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          postMenu ? "h-1/3 opacity-100" : "h-0 opacity-0"
        } bg-black text-white absolute bottom-0 left-0 px-4 py-8 w-full rounded-tl-3xl rounded-tr-3xl flex flex-col justify-between overflow-hidden duration-300 ease-in-out z-50`}
      >
        <div
          className={`${
            postMenu ? "opacity-100" : "opacity-0"
          } w-full flex justify-center items-center delay-150 duration-300 ease-in-out`}
        >
          <div
            // onTouchStart={() => setPostMenu(false)}
            // onMouseDown={() => setPostMenu(false)}
            onTouchMove={() => setPostMenu(false)}
            onMouseMove={() => setPostMenu(false)}
            className="w-1/4 h-2 bg-white rounded-full cursor-pointer hover:opacity-50 duration-300 ease-in-out"
          ></div>
        </div>
        <div className="w-full flex flex-col justify-center gap-8 text-lg font-semibold">
          <div
            className={`${
              postMenu ? "opacity-100" : "opacity-0"
            } flex items-center gap-2 delay-[200ms] duration-300 ease-in-out`}
          >
            {isLiked ? (
              <div
                title="Unlike"
                onClick={toggleLike}
                className="group flex items-center gap-2 cursor-pointer"
              >
                <IoMdHeart
                  size={22}
                  className="cursor-pointer group-hover:text-orange-600 duration-300 ease-in-out"
                />
                <div className="group-hover:text-orange-600 duration-300 ease-in-out">
                  Unlike
                </div>
              </div>
            ) : (
              <>
                {authUser ? (
                  <div
                    title="Like"
                    onClick={toggleLike}
                    className="group flex items-center gap-2 cursor-pointer"
                  >
                    <IoMdHeartEmpty
                      size={22}
                      className="cursor-pointer group-hover:text-orange-600 duration-300 ease-in-out"
                    />
                    <div className="group-hover:text-orange-600 duration-300 ease-in-out">
                      Like
                    </div>
                  </div>
                ) : (
                  <div
                    title="Like"
                    onClick={() => alert("Please sign in to be able to like")}
                    className="group flex items-center gap-2 cursor-pointer"
                  >
                    <IoMdHeartEmpty
                      size={22}
                      className="cursor-pointer group-hover:text-orange-600 duration-300 ease-in-out"
                    />
                    <div className="group-hover:text-orange-600 duration-300 ease-in-out">
                      Like
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          <div
            className={`${
              postMenu ? "opacity-100" : "opacity-0"
            } flex items-center gap-2 delay-[250ms] duration-300 ease-in-out`}
          >
            {authUser ? (
              <Link
                to={`/comments/${post.id}`}
                className="group flex items-center gap-2 cursor-pointer"
              >
                <MdOutlineModeComment
                  title="Comments"
                  size={20}
                  className="cursor-pointer group-hover:text-orange-600 duration-300 ease-in-out"
                />
                <div className="group-hover:text-orange-600 duration-300 ease-in-out">
                  Comment
                </div>
              </Link>
            ) : (
              <Link
                to={`/signin`}
                className="group flex items-center gap-2 cursor-pointer"
              >
                <MdOutlineModeComment
                  title="Comments"
                  size={20}
                  className="cursor-pointer group-hover:text-orange-600 duration-300 ease-in-out"
                />
                <div className="group-hover:text-orange-600 duration-300 ease-in-out">
                  Comment
                </div>
              </Link>
            )}
          </div>
          {!authLoading && authUser?.id === post?.uid ? (
            <div
              className={`${
                postMenu ? "opacity-100" : "opacity-0"
              } flex items-center gap-2 delay-300 duration-300 ease-in-out`}
            >
              <div
                onClick={deletePost}
                title="Delete Post"
                className="group flex items-center gap-2 cursor-pointer"
              >
                <GoTrash
                  size={20}
                  className="cursor-pointer group-hover:text-orange-600 duration-300 ease-in-out"
                />
                <div className="group-hover:text-orange-600 duration-300 ease-in-out">
                  Delete Post
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`${
                postMenu ? "opacity-100" : "opacity-0"
              } flex items-center gap-2 delay-300 duration-300 ease-in-out`}
            >
              <Link
                to={`/profile/${user.id}`}
                className="group flex items-center gap-2 cursor-pointer"
              >
                <RiUser3Line
                  title="Like"
                  onClick={toggleLike}
                  size={22}
                  className="cursor-pointer group-hover:text-orange-600 duration-300 ease-in-out"
                />
                <div className="group-hover:text-orange-600 duration-300 ease-in-out">
                  See Profile
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostMenu;
