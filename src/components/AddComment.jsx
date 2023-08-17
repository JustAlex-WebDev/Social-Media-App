import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { useAddComment } from "../hooks/comments";

const AddComment = ({ post }) => {
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const { addComment } = useAddComment({ postID: post?.id, uid: authUser?.id });

  function handleAddComment(data) {
    addComment(data.text);
    reset();
  }

  if (authLoading) return "Loading...";

  return (
    <div className="bg-black w-full p-4 flex flex-col justify-center items-center gap-4 border-y border-white rounded-2xl">
      <form
        onSubmit={handleSubmit((data) => handleAddComment(data))}
        className="w-full flex flex-col justify-center items-center gap-4 pb-4"
      >
        <div className="w-full flex justify-center">
          <Link to={`/profile/${authUser.id}`}>
            <img
              title="See Profile"
              src={authUser.avatar}
              alt="https://i.pinimg.com/originals/f8/fd/fd/f8fdfde70bd8bd51925808dd6a792024.jpg"
              className="w-11 h-11 mr-6 bg-black border-white border-2 rounded-full object-scale-down"
            />
          </Link>
          <input
            type="text"
            {...register("text", { required: true })}
            autoComplete="off"
            placeholder="Write a comment"
            className="w-full bg-black border-b outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-black w-full text-sm text-center font-semibold border-2 border-[#BF0000] hover:bg-[#BF0000] rounded-2xl p-2 px-4 duration-300 ease-in-out"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default AddComment;
