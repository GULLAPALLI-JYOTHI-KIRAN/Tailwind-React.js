import React from "react";
import assert from "./asserts/asserts";
import "./banner.css";
 
const Banner = () => {
  return (
    <>
      <section className="flex flex-col gap-4 my-12 items-center px-4">
        <article className="flex justify-between gap-4 relative top-0 left-0   ">
          <img
            src={assert.woman}
            alt="woman"
            className="rounded-xl min-[425px]:max-w-[350px] min-[425px]:max-h-[250px] min-[768px]:max-h-[350px] "
          />
          <h3 className="animation-type-effect absolute top-[30px] w-full overflow-hidden font-mono text-white font-bold text-4xl text-center tracking-wide min-[425px]:static min-[425px]:text-3xl min-[425px]:self-center min-[425px]:text-black min-[768px]:text-4xl">
            The <br />
            <span className="text-green-500 text-4xl min-[425px]:text-2xl min-[768px]:text-5xl">
              Photography
            </span>
          </h3>
        </article>
        <article className="flex gap-2 justify-between relative top-0 left-0  min-[992px]:gap-4 ">
          <h4 className="absolute bottom-[25px] w-full font-mono text-white text-3xl text-center tracking-wide min-[425px]:static min-[425px]:text-3xl min-[425px]:self-center min-[425px]:text-black min-[992pxpx]:text-4xl ">
            <span className="text-6xl font-bold text-black min-[768px]:text-7xl  ">
              "
            </span>
            <span className="text-green-500 font-semibold">Photography </span>
            is the stroy
            <br />I fail to put into words
          </h4>
          <img
            src={assert.photo_woman_4}
            alt="woman"
            className="rounded-xl min-[425px]:max-w-[350px] min-[425px]:max-h-[250px] min-[768px]:max-h-[350px]"
          />
        </article>
      </section>
    </>
  );
};
 
export default Banner;
 