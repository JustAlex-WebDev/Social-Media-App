import React from "react";

const PictureModal = ({ post, pictureModal, setPictureModal }) => {
  return (
    <div
      onClick={() => setPictureModal(false)}
      className={`${
        pictureModal ? "top-0 h-full" : "-top-[30%] h-0"
      } bg-modal fixed left-0 w-full flex justify-center items-center z-50`}
    >
      <img
        onClick={(e) => e.stopPropagation()}
        src={post.picture}
        alt=""
        className={`${
          pictureModal ? "opacity-100 delay-150" : "opacity-0 delay-0"
        } w-4/5 rounded-3xl duration-300 ease-in-out z-50`}
      />
    </div>
  );
};

export default PictureModal;
