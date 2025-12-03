import React from "react";
import asserts from "./asserts/asserts";
const EachCard = ({ heading, title }) => {
  return (
    <>
      {heading == undefined ? (
        <article className="border-[3px] border-dashed p-9 rounded-lg cursor-pointer flex flex-col gap-2 items-center tracking-wide transition-all duration-[500ms] ease-in-out group hover:border-blue-500 hover:-translate-y-[10px]">
          <svg
            className="group-hover:text-black  mb-1 text-white"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
          </svg>
          <h4 className="text-base font-semibold text-white transition-all duration-[500ms] ease-in-out group-hover:text-black">
            New projects
          </h4>
        </article>
      ) : (
        <article className="flex flex-col gap-2 border-[2px] rounded-lg cursor-pointer p-3 tracking-wide transition-all duration-[500ms] ease-in-out group hover:bg-blue-500 hover:border-blue-500 hover:-translate-y-[10px]">
          <h4 className="text-lg font-semibold text-zinc-900 transition-all duration-[500ms] ease-in-out group-hover:text-white">
            {heading}
          </h4>
          <span className="text-base font-semibold  transition-all duration-[500ms] ease-in-out text-white group-hover:text-slate-600">
            {title}
          </span>
          <div className="flex items-center relative mt-1 transition-all duration-[500ms] ease-in-out">
            <img
              src={asserts.pic_1}
              alt=""
              className="rounded-full w-[45px] h-[40px] border-[2px] border-white"
            />
            <img
              src={asserts.pic_2}
              alt=""
              className="rounded-full w-[40px] h-[40px] border-[2px] border-white relative left-[-10px]"
            />
            <img
              src={asserts.pic_3}
              alt=""
              className="rounded-full w-[40px] h-[40px] border-[2px] border-white relative left-[-20px]"
            />
            <img
              src={asserts.pic_4}
              alt=""
              className="rounded-full w-[40px] h-[40px] border-[2px] border-white relative left-[-30px]"
            />
            <img
              src={asserts.pic_5}
              alt=""
              className="rounded-full w-[40px] h-[40px] border-[2px] border-white relative left-[-40px]"
            />
          </div>
        </article>
      )}
    </>
  );
};
 
export default EachCard;