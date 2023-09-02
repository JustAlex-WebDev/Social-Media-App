import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/auth";
import { useAddComment } from "../../hooks/comments";

const AddComment = ({ post }) => {
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { addComment } = useAddComment({ postID: post?.id, uid: authUser?.id });
  const { register, handleSubmit, reset } = useForm();

  function handleAddComment(data) {
    addComment(data.text);
    reset();
  }

  if (authLoading) return null;

  return (
    <div className="bg-black w-full flex flex-col justify-center items-center rounded-2xl">
      <form
        onSubmit={handleSubmit((data) => handleAddComment(data))}
        className="w-full flex flex-col justify-center items-center gap-4 pb-4"
      >
        <div className="w-full flex justify-center">
          <img
            src={authUser.avatar}
            alt="https://i.pinimg.com/originals/f8/fd/fd/f8fdfde70bd8bd51925808dd6a792024.jpg"
            className="w-10 h-10 mr-6 bg-black border-[#BF0000] border-2 rounded-full object-cover"
          />
          <input
            type="text"
            {...register("text", { required: true })}
            autoComplete="off"
            placeholder="Write a comment"
            className="w-full bg-black border-b border-neutral-700 outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-black w-full text-sm text-center font-semibold rounded-3xl border-2 border-[#BF0000] hover:text-[#BF0000] hover:opacity-80 p-2 px-4 duration-300 ease-in-out"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default AddComment;
