import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signUp, setSignedUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      setSignedUp(true);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-[350px] h-screen m-auto px-8 flex flex-col justify-center text-white">
      <div className="text-7xl font-bold pb-12 text-center text-[#BF0000]">
        REV
      </div>
      <h1 className="text-2xl font-bold ">Sign Up</h1>
      {error ? <p className="bg-[#BF0000] p-3 my-2">{error}</p> : null}
      <form onSubmit={handleSubmit}>
        <div className="my-4">
          <label htmlFor="username" className="cursor-pointer">
            Username
          </label>
          <div className="my-2 w-full relative rounded-2xl shadow-sm shadow-white">
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-white rounded-2xl bg-black text-white duration-300"
              id="username"
              type="text"
            />
          </div>
        </div>
        <div className="my-4">
          <label htmlFor="email" className="cursor-pointer">
            Email
          </label>
          <div className="my-2 w-full relative rounded-2xl shadow-sm shadow-white">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-white rounded-2xl bg-black text-white duration-300"
              id="email"
              type="email"
            />
            <AiOutlineMail className="absolute right-3 top-3 text-grey-400" />
          </div>
        </div>
        <div className="my-4">
          <label
            htmlFor="password"
            className="text-primary cursor-pointer duration-300"
          >
            Password
          </label>
          <div className="my-2 w-full relative rounded-2xl shadow-sm shadow-white">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-white rounded-2xl bg-black text-white duration-300"
              id="password"
              type="password"
            />
            <AiFillLock className="absolute right-3 top-3 text-grey-400" />
          </div>
        </div>
        <button className="w-full my-2 p-3 bg-black hover:bg-[#BF0000] border-2 border-[#BF0000] text-[#BF0000] hover:text-white rounded-2xl shadow-md shadow-[#BF0000] font-bold">
          Sign Up
        </button>
      </form>
      <div className="my-4 text-center duration-300">
        <span className="text-grey-400">Already have an account?</span>
        <span> </span>
        <Link to="/signin" className="hover:opacity-50 font-bold">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Signup;
