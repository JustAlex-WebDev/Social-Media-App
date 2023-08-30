import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import { useForm } from "react-hook-form";
import { AiOutlinePicture } from "react-icons/ai";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { useAddPost } from "../hooks/posts";
import { useAuth } from "../hooks/auth";
import PageTransition from "../components/PageTransition";
import { captionValidate, textValidate } from "../utils/form-validate";

const Post = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    addPost,
    isLoading: addingPostLoading,
    fileURL,
    setFile,
  } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();
  const [captionLenght, setCaptionLenght] = useState(0);
  const [textLenght, setTextLenght] = useState(0);
  const navigate = useNavigate();

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      caption: data.caption,
      text: data.text,
    });
    reset();
    navigate("/");
  }

  if (user) {
    return (
      <>
        <PageTransition />
        <m.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          onSubmit={handleSubmit(handleAddPost)}
          onClick={(e) => e.stopPropagation()}
          className="my-20 bg-primary h-full w-full max-w-[1140px] m-auto p-8 flex flex-col justify-center gap-8 text-primary"
        >
          <div className="flex justify-between items-center gap-4">
            <div className="text-xl font-semibold tracking-wider">New post</div>
            <div className="flex justify-center items-center gap-4 font-semibold">
              <div
                title="Preview your post"
                className="text-secondary opacity-100 hover:opacity-80 tracking-wider cursor-pointer duration-300 ease-in-out"
              >
                Preview
              </div>
              <span className="text-neutral-500 cursor-default">/</span>
              <button
                type="submit"
                title="Post"
                className="text-primary hover:text-secondary tracking-wider duration-300 ease-in-out"
              >
                {authLoading || addingPostLoading ? <>Loading...</> : <>Post</>}
              </button>
            </div>
          </div>
          <div>
            <textarea
              {...register("caption", captionValidate)}
              onChange={(e) => setCaptionLenght(e.target.value.length)}
              placeholder="Caption"
              maxLength="30"
              cols="1"
              rows="1"
              className="bg-primary w-full pb-2 border-b-2 border-neutral-500 hover:border-white font-medium placeholder:font-medium text-primary hover:placeholder:text-primary cursor-pointer outline-none resize-none tracking-wider duration-300 ease-in-out placeholder:duration-300 placeholder:ease-in-out"
            ></textarea>
            <p className="text-neutral-500">
              {captionLenght === 0 ? (
                <div>Max Characters: 30</div>
              ) : (
                <div>
                  Max Characters:{" "}
                  {captionValidate.maxLength.value - captionLenght}
                </div>
              )}
            </p>
            {errors.caption ? (
              <p className="text-[#BF0000]">{errors.caption.message}</p>
            ) : null}
          </div>
          <div>
            <textarea
              {...register("text", textValidate)}
              onChange={(e) => setTextLenght(e.target.value.length)}
              placeholder="Message"
              maxLength="100"
              cols="1"
              rows="3"
              className="bg-primary w-full pb-2 border-b-2 border-neutral-500 hover:border-white font-medium placeholder:font-medium text-primary hover:placeholder:text-primary cursor-pointer outline-none resize-none tracking-wider duration-300 ease-in-out placeholder:duration-300 placeholder:ease-in-out"
            ></textarea>
            <p className="text-neutral-500">
              {textLenght === 0 ? (
                <div>Max Characters: 100</div>
              ) : (
                <div>
                  Max Characters: {textValidate.maxLength.value - textLenght}
                </div>
              )}
            </p>
          </div>
          <div className="w-full flex justify-between items-center gap-4">
            <label
              htmlFor="pic"
              title="Add an image"
              className={`${
                fileURL ? "border-white" : null
              } w-1/2 h-40 flex justify-center items-center border-2 border-neutral-500 rounded-2xl py-8 hover:border-white cursor-pointer duration-500 ease-in-out group`}
            >
              <AiOutlinePicture
                className={`${
                  fileURL ? "h-24 text-primary" : null
                } w-full h-20 group-hover:h-24 text-neutral-500 group-hover:text-primary duration-500 ease-in-out`}
              />
              <input
                id="pic"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleChange}
              />
            </label>
            <label
              htmlFor="location"
              title="Add a location"
              className="w-1/2 h-40 flex justify-center items-center border-2 border-neutral-500 rounded-2xl py-8 hover:border-white cursor-pointer duration-500 ease-in-out group"
            >
              <MdOutlineAddLocationAlt className="w-full h-16 group-hover:h-20 text-neutral-500 group-hover:text-primary duration-500 ease-in-out" />
              <input
                id="location"
                type="file"
                accept="image/*"
                className="hidden"
                // onChange={handleChange}
              />
            </label>
          </div>
          {/* {fileURL ? (
            <img
              src={fileURL}
              alt="postPic"
              className="w-full h-auto rounded-2xl"
            />
          ) : null} */}
        </m.form>
      </>
    );
  } else {
    <Navigate to="/signin" />;
  }
};

export default Post;
