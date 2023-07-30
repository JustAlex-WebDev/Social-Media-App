import React from "react";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineModeComment } from "react-icons/md";

const IndividualPost = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-4">
      <div className="flex justify-center items-center gap-2">
        <Link
          to="/profile"
          title="Profile"
          className="w-9 h-9 bg-black border-white border-2 rounded-full hover:cursor-pointer hover:opacity-80"
        ></Link>
        <div className="text-xl">Alex</div>
      </div>
      <div className="text-justify">
        Also known as filler or dummy text, this is text copy that serves to
        fill a space without saying anything meaningful. It's essentially
        nonsense text that still gives an idea of what real words will look like
        in the final product.
      </div>
      <div className="flex justify-center items-center gap-6">
        <div className="flex justify-center items-center gap-2">
          <IoMdHeartEmpty
            title="Like"
            size={24}
            className="cursor-pointer hover:opacity-80"
          />
          <div>21</div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <MdOutlineModeComment
            title="Comment"
            size={21}
            className="cursor-pointer hover:opacity-80"
          />
          <div>27</div>
        </div>
      </div>
    </div>
  );
};

export default IndividualPost;
