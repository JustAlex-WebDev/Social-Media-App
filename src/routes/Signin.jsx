import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import { useLogin } from "../hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate } from "../utils/form-validate";

const Signin = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [error, setError] = useState("");
  //   const navigate = useNavigate();

  const { login, isLoading, error } = useLogin();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function handleLogin(data) {
    // console.log(data);
    const succeeded = await login({
      email: data.email,
      password: data.password,
      redirectTo: "/",
    });

    if (succeeded) reset();
  }

  //   const { signIn, setSignedUp } = UserAuth();

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setError("");
  //     try {
  //       await signIn(email, password);
  //       setSignedUp(true);
  //       navigate("/");
  //     } catch (e) {
  //       setError(e.message);
  //       console.log(e.message);
  //     }
  //   };

  return (
    <div className="max-w-[350px] h-screen m-auto px-8 flex flex-col justify-center text-white">
      <div className="text-7xl font-bold pb-12 text-center text-[#BF0000]">
        REV
      </div>
      <h1
        className={`${
          error ? "text-[#BF0000]" : "text-white"
        } text-2xl font-bold text-left pt-8`}
      >
        Sign In
      </h1>
      {error ? <p className="text-[#BF0000] mt-2">{error}</p> : null}
      <form onSubmit={handleSubmit((data) => handleLogin(data))}>
        <div className="my-4">
          <label
            htmlFor="email"
            className={`${errors.email ? "text-[#BF0000]" : null} `}
          >
            Email
          </label>
          <div className="my-2 w-full relative rounded-2xl">
            <input
              //   onChange={(e) => setEmail(e.target.value)}
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
              //   onChange={(e) => setPassword(e.target.value)}
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
            <span className="text-white animate-pulse">Loading...</span>
          ) : (
            <span>Sign In</span>
          )}
        </button>
      </form>
      <div className="my-4 text-center duration-300">
        <span className="text-grey-400">Don't have an account?</span>
        <span> </span>
        <Link to="/signup" className="hover:opacity-50 font-bold">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Signin;
