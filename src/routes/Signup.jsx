import React from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { useForm } from "react-hook-form";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { useRegister } from "../hooks/auth";
import PageTransition from "../components/PageTransition";
import {
  emailValidate,
  passwordValidate,
  usernameValidate,
} from "../utils/form-validate";

const Signup = () => {
  const { register: signup, isLoading, error } = useRegister();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function handleRegister(data) {
    // console.log(data);
    const succeeded = await signup({
      username: data.username,
      email: data.email,
      password: data.password,
      redirectTo: "/",
    });

    if (succeeded) reset();
  }

  return (
    <>
      <PageTransition />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="max-w-[350px] h-screen m-auto px-8 flex flex-col justify-center text-white"
      >
        <Link
          to="/"
          className="text-7xl font-bold pb-12 text-center text-[#BF0000]"
        >
          REV
        </Link>
        <h1
          className={`${
            error ? "text-[#BF0000]" : "text-white"
          } text-2xl font-bold text-left pt-8 pb-2`}
        >
          Sign Up
        </h1>
        {error ? <p className="text-[#BF0000] mt-2">{error}</p> : null}
        <form onSubmit={handleSubmit((data) => handleRegister(data))}>
          <div className="my-4">
            <label
              htmlFor="username"
              className={`${errors.username ? "text-[#BF0000]" : null} `}
            >
              Username
            </label>
            <div className="my-2 w-full relative rounded-2xl">
              <input
                className={`${
                  errors.username ? "border-[#BF0000]" : "border-white"
                } w-full p-2 border-2 rounded-2xl bg-black outline-none capitalize`}
                id="username"
                type="text"
                placeholder="Demo"
                {...register("username", usernameValidate)}
              />
              <AiOutlineMail className="absolute right-3 top-3 text-grey-400" />
            </div>
            {errors.username ? (
              <p className="text-[#BF0000] mt-2">{errors.username.message}</p>
            ) : null}
          </div>
          <div className="my-4">
            <label
              htmlFor="email"
              className={`${errors.email ? "text-[#BF0000]" : null} `}
            >
              Email
            </label>
            <div className="my-2 w-full relative rounded-2xl">
              <input
                className={`${
                  errors.email ? "border-[#BF0000]" : "border-white"
                } w-full p-2 border-2 rounded-2xl bg-black outline-none`}
                id="email"
                type="email"
                placeholder="demo@demo.com"
                {...register("email", emailValidate)}
              />
              <AiOutlineMail className="absolute right-3 top-3 text-grey-400" />
            </div>
            {errors.email ? (
              <p className="text-[#BF0000] mt-2">{errors.email.message}</p>
            ) : null}
          </div>
          <div className="my-4">
            <label
              htmlFor="password"
              className={`${
                errors.password ? "text-[#BF0000]" : null
              } cursor-pointer`}
            >
              Password
            </label>
            <div className="my-2 w-full relative rounded-2xl">
              <input
                className={`${
                  errors.password ? "border-[#BF0000]" : "border-white"
                } w-full p-2 border-2 rounded-2xl bg-black outline-none`}
                id="password"
                type="password"
                placeholder="password"
                {...register("password", passwordValidate)}
              />
              <AiFillLock className="absolute right-3 top-3 text-grey-400" />
            </div>
            {errors.password ? (
              <p className="text-[#BF0000] mt-2">{errors.password.message}</p>
            ) : null}
          </div>
          <button className="w-full my-2 p-3 bg-black hover:bg-[#BF0000] border-2 border-[#BF0000] text-[#BF0000] hover:text-white rounded-2xl shadow-none hover:shadow-md shadow-[#BF0000] font-bold">
            {isLoading ? (
              <span className="animate-pulse">Signing Up</span>
            ) : (
              <span>Sign Up</span>
            )}
          </button>
        </form>
        <div className="my-4 text-center duration-300">
          <span className="text-grey-400 pr-2">Already have an account?</span>
          <Link to="/signin" className="hover:opacity-50 font-bold">
            Sign In
          </Link>
        </div>
      </m.div>
    </>
  );
};

export default Signup;
