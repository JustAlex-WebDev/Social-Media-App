import React from "react";
import { PiEngineFill } from "react-icons/pi";

const AnimationOnLoad = ({ touched, setTouched }) => {
  return (
    <div
      onMouseDown={() => setTouched(true)}
      onMouseUp={() => setTouched(false)}
      className="bg-black h-[100svh] w-full cursor-pointer overflow-hidden"
    >
      <div className="h-[100svh] w-full max-w-[1140px] m-auto flex flex-col justify-between items-center font-semibold">
        <div
          className={`${
            touched ? "opacity-100" : "opacity-0 delay-0 duration-300"
          } fixed w-full max-w-[1140px] m-auto flex justify-end text-[#BF0000] p-8 delay-[2500ms] duration-1000`}
        >
          <PiEngineFill size={24} />
        </div>
        <div
          className={`${
            touched ? "pt-0" : "pt-80"
          } h-1/2 w-full flex flex-col justify-center items-center text-center uppercase duration-1000 ease-in-out`}
        >
          <div
            className={`${
              touched ? "text-[#BF0000]" : "text-white delay-0"
            } animate-pulse text-lg delay-[2200ms] duration-1000 ease-in-out`}
          >
            hold to
          </div>
          <div
            className={`${
              touched ? "text-[#BF0000]" : "text-white delay-0"
            } text-8xl delay-[1900ms] duration-1000 ease-in-out`}
          >
            rev
          </div>
        </div>
        <div
          className={`${
            touched ? "h-1/2" : "h-0"
          } w-full flex flex-col text-xl gap-20 duration-1000 ease-in-out`}
        >
          <div className="flex justify-end">
            <div
              className={`${
                touched
                  ? "text-[#BF0000] border-b-[#BF0000]"
                  : "text-white border-b-[#f2f2f2] delay-0"
              } border-b-2 px-10 delay-[1600ms] duration-1000 ease-in-out`}
            >
              12000rpm
            </div>
          </div>
          <div className="flex justify-start">
            <div
              className={`${
                touched
                  ? "text-[#BF0000] border-b-[#BF0000]"
                  : "text-white border-b-[#f2f2f2] delay-0"
              } border-b-2 px-10 delay-[1300ms] duration-1000 ease-in-out`}
            >
              9000rpm
            </div>
          </div>
          <div className="flex justify-end">
            <div
              className={`${
                touched
                  ? "text-[#BF0000] border-b-[#BF0000]"
                  : "text-white border-b-[#f2f2f2] delay-0"
              } border-b-2 px-10 delay-1000 duration-1000 ease-in-out`}
            >
              6000rpm
            </div>
          </div>
          <div className="flex justify-start">
            <div
              className={`${
                touched
                  ? "text-[#BF0000] border-b-[#BF0000]"
                  : "text-white border-b-[#f2f2f2] delay-0"
              } border-b-2 px-10 delay-700 duration-1000 ease-in-out`}
            >
              3000rpm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationOnLoad;
