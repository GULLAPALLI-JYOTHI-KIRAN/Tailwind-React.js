import React from "react";
import sarah_dayan_pic from "./asserts/sarah_dayan_pic.jpg";
const Card = () => {
  return (
    <>
      <article className="flex justify-center items-center">
        <figure className="my-4  mx-2 rounded-xl py-3 px-1.5 overflow-hidden pr-2 flex flex-col gap-4 border-[2px] sm:flex-row  sm:px-0 sm:py-0 md:w-[75%] min-[992px]:w-[55%] transition-all ease-linear duation-[500ms] cursor-pointer hover:-translate-y-2  relative top-0 left-0 z-10 shadow-2xl ">
          <img
            src={sarah_dayan_pic}
            alt="sarah_dayan_pic"
            width="300px"
            height="300px"
            className="w-32 h-32 mx-auto rounded-full sm:w-48 sm:h-auto sm:rounded-none"
          />
          <figcaption className="font-mono sm:p-6">
            <p className="text-lg text-center font-medium sm:text-xl sm:font-semibold sm:text-left">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
            <h3 className="mt-3 text-center font-semibold text-lg text-sky-500 sm:text-xl sm:text-left">
              Sarah Dayan
            </h3>
            <h4 className="mt-2.5 text-center font-semibold text-lg text-slate-700 sm:text-xl sm:text-left">
              Staff Engineer, Algolia
            </h4>
          </figcaption>
          <div className="absolute top-[0px] left-[0px] bg-sky-400 py-1.5 pt-3 px-2 pr-3 w-[120px] rotate-[-45deg]  translate-x-[-40px]  translate-y-[-6px]">
            <h3 className="text-center text-lg font-semibold text-white">
              New
            </h3>
          </div>
        </figure>
      </article>
    </>
  );
};
 
export default Card;