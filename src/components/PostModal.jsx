import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { IoMdImage } from "react-icons/io";
import { PostModalContext } from "../context/PostModalContext";
import { useAuth } from "../hooks/auth";
import { useAddPost } from "../hooks/posts";

const PostModal = () => {
  const { postModal, setPostModal } = useContext(PostModalContext);
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPostLoading } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();

  function handleAddPost(data) {
    // console.log(data);
    addPost({
      uid: user.id,
      text: data.text,
    });
    reset();
  }

  return (
    <div
      onClick={() => setPostModal(false)}
      className={`${
        postModal ? "opacity-100 top-0" : "opacity-0 top-[80rem]"
      } z-40 fixed bg-modal w-full h-full ease-in-out duration-700`}
    >
      <div className="h-full w-full max-w-[1140px] m-auto px-8 flex justify-center items-center text-white font-semibold">
        <form
          onSubmit={handleSubmit(handleAddPost)}
          onClick={(e) => e.stopPropagation()}
          className={`${
            postModal ? "border-2" : "border-none"
          } bg-black flex flex-col justify-center items-center gap-4 px-8 py-4 rounded-2xl border-white shadow-white shadow-md w-full max-w-[34rem] h-80 ease-in-out duration-300 delay-300`}
        >
          <div
            className={`${
              postModal ? "opacity-100" : "opacity-0"
            } flex justify-between items-center w-full ease-in-out duration-300 delay-500`}
          >
            <div className="text-xl">New post</div>
            <button
              type="submit"
              className="text-[#dd1515] hover:text-white border-2 border-[#BF0000] hover:bg-[#BF0000] px-4 py-2 rounded-2xl font-bold cursor-pointer text-sm"
            >
              {authLoading || addingPostLoading ? <>Loading...</> : <>POST</>}
            </button>
          </div>
          <div className="bg-black w-full flex justify-center items-center pr-2 border-2 border-[#aaaaaa] rounded-2xl">
            <textarea
              autoFocus={true}
              {...register("text", { required: true })}
              placeholder="Write a message"
              maxLength="300"
              cols="30"
              rows="10"
              className={`${
                postModal ? "opacity-100" : "opacity-0"
              } bg-black h-44 rounded-2xl p-4 w-full outline-none text-white ease-in-out duration-300 delay-700`}
            ></textarea>
          </div>
          <div
            className={`${
              postModal ? "opacity-100" : "opacity-0"
            } w-full flex justify-center items-center gap-2 hover:opacity-80 cursor-pointer ease-in-out duration-300 delay-700`}
          >
            <IoMdImage size={24} />
            <div>Add an image</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
