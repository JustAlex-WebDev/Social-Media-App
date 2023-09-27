import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import { useForm } from "react-hook-form";
import { AiOutlinePicture } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineModeComment } from "react-icons/md";
import { useAddPost } from "../hooks/posts";
import { useAuth } from "../hooks/auth";
import PageTransition from "../components/PageTransition";
import {
  captionValidate,
  textValidate,
  picValidate,
} from "../utils/form-validate";
import Navigation from "../components/navigation/Navigation";

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
  const [captionValue, setCaptionValue] = useState("");
  const [textLenght, setTextLenght] = useState(0);
  const [textValue, setTextValue] = useState("");
  const [preview, setPreview] = useState(false);
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

  if (authLoading) return null;

  if (user?.id) {
    return (
      <>
        {/* <PageTransition />
        <Navigation /> */}
        {/* <m.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          onSubmit={handleSubmit(handleAddPost)}
          onClick={(e) => e.stopPropagation()}
          className="h-full w-full max-w-[500px] m-auto bg-white p-4 flex flex-col gap-4 text-black"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="text-xl font-semibold tracking-wider">New post</div>
            <div className="flex justify-center items-center gap-4 font-semibold">
              {captionLenght === 0 || textLenght === 0 ? (
                <div
                  title="Preview your post"
                  className="text-secondary tracking-wider cursor-not-allowed duration-300 ease-in-out"
                >
                  Preview
                </div>
              ) : (
                <div
                  title="Preview your post"
                  onClick={() => setPreview(!preview)}
                  className="text-secondary tracking-wider hover:opacity-80 cursor-pointer duration-300 ease-in-out"
                >
                  Preview
                </div>
              )}
              <span className="text-neutral-500 cursor-default">/</span>
              <button
                type="submit"
                title="Post"
                className={`${
                  captionLenght === 0 || textLenght === 0
                    ? "hover:text-primary"
                    : null
                } text-primary hover:text-secondary tracking-wider duration-300 ease-in-out`}
              >
                {authLoading || addingPostLoading ? <>Loading...</> : <>Post</>}
              </button>
            </div>
          </div>
          <div>
            <textarea
              {...register("caption", captionValidate)}
              onChange={(e) =>
                setCaptionLenght(e.target.value.length) &
                setCaptionValue(e.target.value)
              }
              placeholder="Caption"
              maxLength="30"
              cols="1"
              rows="1"
              className={`${
                captionLenght === 0 ? null : "border-white"
              } bg-white w-full pb-2 border-b-2 border-neutral-500 hover:border-white font-medium placeholder:font-medium text-primary hover:placeholder:text-primary cursor-pointer outline-none resize-none tracking-wider duration-300 ease-in-out placeholder:duration-300 placeholder:ease-in-out`}
            ></textarea>
            <p className="text-neutral-500">
              {captionLenght === 0 ? (
                <>Max Characters: 30</>
              ) : (
                <>
                  Max Characters:{" "}
                  {captionValidate.maxLength.value - captionLenght}
                </>
              )}
            </p>
            {errors.caption ? (
              <p className="text-[#BF0000]">
                {captionLenght === 0 ? <>{errors.caption.message}</> : null}
              </p>
            ) : null}
          </div>
          <div>
            <textarea
              {...register("text", textValidate)}
              onChange={(e) =>
                setTextLenght(e.target.value.length) &
                setTextValue(e.target.value)
              }
              placeholder="Message"
              maxLength="100"
              cols="1"
              rows="3"
              className={`${
                textLenght === 0 ? null : "border-white"
              } bg-primary w-full pb-2 border-b-2 border-neutral-500 hover:border-white font-medium placeholder:font-medium text-primary hover:placeholder:text-primary cursor-pointer outline-none resize-none tracking-wider duration-300 ease-in-out placeholder:duration-300 placeholder:ease-in-out`}
            ></textarea>
            <p className="text-neutral-500">
              {textLenght === 0 ? (
                <>Max Characters: 100</>
              ) : (
                <>Max Characters: {textValidate.maxLength.value - textLenght}</>
              )}
            </p>
            {errors.text ? (
              <p className="text-[#BF0000]">
                {textLenght === 0 ? <>{errors.text.message}</> : null}
              </p>
            ) : null}
          </div>
          <label
            htmlFor="pic"
            title="Add an image"
            className={`${
              fileURL ? "border-white" : null
            } w-full h-60 flex flex-col justify-center items-center border-2 border-neutral-500 rounded-2xl py-8 hover:border-white cursor-pointer duration-500 ease-in-out group`}
          >
            <AiOutlinePicture
              className={`${
                fileURL ? "h-28 text-primary" : null
              } w-full h-28 group-hover:h-32 text-neutral-500 group-hover:text-primary duration-500 ease-in-out`}
            />
            <input
              id="pic"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            />
          </label>
          {preview ? (
            <div className="flex flex-col gap-4">
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
                    less than a minute ago
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="overflow-hidden h-auto">{textValue}</div>
                {fileURL ? (
                  <img
                    src={fileURL}
                    alt="postPic"
                    className="w-full h-auto rounded-2xl"
                  />
                ) : null}
                <div className={`${fileURL ? null : "-mt-2"} flex gap-2`}>
                  <div className="font-semibold">{user.username}</div>
                  <span>-</span>
                  <div className="overflow-hidden h-auto">{captionValue}</div>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex gap-2">
                  <IoMdHeartEmpty
                    title="Like"
                    size={24}
                    className="cursor-pointer hover:opacity-80"
                  />
                  <span>0</span>
                </div>
                <div className="flex gap-2">
                  <MdOutlineModeComment
                    title="Comments"
                    size={21}
                    className="cursor-pointer hover:opacity-80"
                  />
                  <span>0</span>
                </div>
              </div>
            </div>
          ) : null}
        </m.form> */}
        <form
          onSubmit={handleSubmit(handleAddPost)}
          onClick={(e) => e.stopPropagation()}
          className="h-full w-full max-w-[500px] m-auto bg-white p-4 flex flex-col justify-center items-center text-center gap-8 text-black"
        >
          {/* Heading */}
          <div className="flex flex-col justify-center items-center gap-2">
            {/* Title */}
            <div className="text-3xl text-orange-600 font-semibold tracking-wider">
              New Post
            </div>

            {/* Preview Button &  Post Button */}
            <div className="flex justify-center items-center gap-4">
              {/* Preview Button */}
              {captionLenght === 0 || !fileURL ? (
                <div
                  title="Preview Post"
                  className="text-neutral-400 hover:text-orange-600 font-semibold tracking-wider cursor-not-allowed duration-300 ease-in-out"
                >
                  Preview
                </div>
              ) : (
                <div
                  title="Preview Post"
                  onClick={() => setPreview(!preview)}
                  className="text-neutral-400 hover:text-orange-600 font-semibold tracking-wider cursor-pointer duration-300 ease-in-out"
                >
                  Preview
                </div>
              )}

              <span className="text-neutral-400 font-semibold cursor-default">
                /
              </span>

              {/* Post Button */}
              <button
                type="submit"
                title="Post"
                className="text-neutral-400 hover:text-orange-600 font-semibold tracking-wider cursor-pointer duration-300 ease-in-out"
              >
                {authLoading || addingPostLoading ? <>Loading...</> : <>Post</>}
              </button>
            </div>
          </div>

          {/* Post */}
          <div className="w-full flex flex-col justify-center items-center gap-4">
            {/* Caption */}
            <div className="w-full relative">
              <textarea
                {...register("caption", captionValidate)}
                onChange={(e) =>
                  setCaptionLenght(e.target.value.length) &
                  setCaptionValue(e.target.value)
                }
                placeholder="Caption"
                title="Caption"
                maxLength="30"
                cols="1"
                rows="1"
                className={`${
                  captionLenght !== 0
                    ? "text-orange-600 placeholder:text-orange-600"
                    : null
                } ${
                  errors.caption
                    ? "placeholder:text-[#BF0000] border-[#bf000096]"
                    : "border-neutral-300"
                } w-full pb-2 bg-white text-black focus:text-orange-600 font-semibold tracking-wider border-b-2 placeholder:text-neutral-400 placeholder:font-semibold hover:placeholder:text-orange-600 focus:placeholder:text-orange-600 hover:border-orange-600 focus:border-orange-600 outline-none resize-none cursor-pointer duration-300 ease-in-out placeholder:duration-300 placeholder:ease-in-out`}
              ></textarea>
              <p className="absolute top-0 right-0 text-neutral-400 font-semibold">
                {captionLenght === 0 ? (
                  <span>30</span>
                ) : (
                  <span>{captionValidate.maxLength.value - captionLenght}</span>
                )}
              </p>
              {errors.caption ? (
                <p className="text-[#BF0000] font-medium text-left tracking-wider">
                  {captionLenght === 0 ? <>{errors.caption.message}</> : null}
                </p>
              ) : null}
            </div>

            {/* Picture */}
            <label
              htmlFor="pic"
              title="Add an image"
              className={`${
                errors.pic ? "border-[#BF0000]" : "border-neutral-300"
              } w-full h-60 flex flex-col justify-center items-center border-2 hover:border-orange-600 rounded-2xl cursor-pointer duration-300 ease-in-out group`}
            >
              <AiOutlinePicture
                className={`${
                  fileURL ? "h-[7.5rem] text-orange-600" : null
                } w-full h-28 group-hover:h-[7.5rem] text-neutral-300 group-hover:text-orange-600 duration-300 ease-in-out`}
              />
              <input
                id="pic"
                type="file"
                accept="image/*"
                {...register("pic", picValidate)}
                className="hidden"
                onChange={handleChange}
              />
            </label>
            {errors.pic ? (
              <p className="w-full text-[#BF0000] -mt-2 font-medium text-center tracking-wider">
                {!fileURL ? <>{errors.pic.message}</> : null}
              </p>
            ) : null}
          </div>
        </form>
      </>
    );
  } else {
    navigate("/signin");
  }
};

export default Post;
