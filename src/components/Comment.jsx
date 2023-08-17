import React from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { useUser } from "../hooks/users";
import { GoTrash } from "react-icons/go";
import { useDeleteComment } from "../hooks/comments";
import { useAuth } from "../hooks/auth";

const Comment = ({ comment }) => {
  const { user, isLoading: userLoading } = useUser(comment.uid);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { deleteComment, isLoading: deleteLoading } = useDeleteComment(
    comment.id
  );

  if (userLoading) return "Loading...";

  return (
    <div className="w-full flex flex-col justify-start items-left gap-4">
      <div className="flex justify-start items-center gap-2">
        <Link to={`/profile/${user.id}`}>
          <img
            title="See Profile"
            src={user.avatar}
            alt="https://i.pinimg.com/originals/f8/fd/fd/f8fdfde70bd8bd51925808dd6a792024.jpg"
            className="w-9 h-9 bg-black border-white border-2 rounded-full object-scale-down"
          />
        </Link>
        <div className="flex flex-col justify-center items-left">
          <Link
            to={`"/profile/"${user.id}`}
            title="See Profile"
            className="text-base font-semibold capitalize hover:opacity-80"
          >
            {user.username}
          </Link>
          <div className="opacity-80 text-xs">
            {formatDistanceToNow(comment.date)} ago
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8">
        <div className="w-full border-b border-gray-500">{comment.text}</div>
        {!authLoading && authUser.id === comment.uid && (
          <GoTrash
            size={21}
            onClick={deleteComment}
            title="Delete Comment"
            className="cursor-pointer hover:text-[#BF0000] duration-300 ease-in-out"
          />
        )}
      </div>
    </div>
  );
};

export default Comment;
