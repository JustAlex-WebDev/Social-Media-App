import React, { useContext } from "react";
import { IoMdImage } from "react-icons/io";
import { PostModalContext } from "../context/PostModalContext";

const PostModal = () => {
  const { postModal, setPostModal, searchInputRef } =
    useContext(PostModalContext);

  return (
    <div
      onClick={() => setPostModal(false)}
      className={`${
        postModal ? "opacity-100" : "opacity-0"
      } fixed top-0 bg-modal w-full h-full ease-in-out duration-300`}
    >
      <div
        className={`${
          postModal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-80"
        } h-full w-full max-w-[1140px] m-auto px-8 flex justify-center items-center text-white font-semibold ease-in-out duration-1000`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-black flex flex-col justify-center items-center gap-4 px-8 border-2 border-white shadow-white shadow-md w-full max-w-[34rem] h-80 rounded-2xl"
        >
          <div className="flex justify-between items-center w-full">
            <div className="text-2xl">New post</div>
            <div className="uppercase bg-[#BF0000] px-4 py-2 rounded-2xl font-bold hover:opacity-80 cursor-pointer">
              post
            </div>
          </div>
          <input
            type="text"
            ref={searchInputRef}
            placeholder="Write a message"
            className="bg-black border-2 border-[#aaaaaa] rounded-2xl p-4 pb-32 w-full outline-none text-white"
          />
          <div className="w-full flex justify-center items-center gap-2 hover:opacity-80 cursor-pointer">
            <IoMdImage size={24} />
            <div>Add an image</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
