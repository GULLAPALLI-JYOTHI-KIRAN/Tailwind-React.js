import React from "react";
import assert from "./asserts/assert";
 
const Projects = () => {
  return (
    <>
      <h4 className="text-end text-3xl mt-10 mb-2 font-semibold pr-3">
        Recent Projects
      </h4>
      <section className="grid grid-cols-1 gap-4 px-8 my-8 min-[650px]:grid-cols-2 min-[992px]:grid-cols-3 min-[992px]:gap-8">
        <article className="flex flex-col gap-4 transition-all ease-linear duration-[500ms] hover:-translate-y-2 border-[2.5px] border-zinc-500 rounded-2xl overflow-hidden cursor-pointer ">
          <img
            src={assert.laptop_pic}
            alt="laptop_pic"
            className="rounded-t-2xl w-auto h-[190px] "
          />
          <h4 className="text-center text-lg py-2 font-bold">Web Design</h4>
        </article>
        <article className="flex flex-col gap-4 transition-all ease-linear duration-[500ms] hover:-translate-y-2 border-[2.5px] border-zinc-500 rounded-2xl overflow-hidden cursor-pointer ">
          <img
            src={assert.analytic_pic}
            alt="analytic_pic"
            className="rounded-t-2xl w-auto h-[190px] "
          />
          <h4 className="text-center text-lg py-2 font-bold">Web Design</h4>
        </article>
        <article className="flex flex-col gap-4 transition-all ease-linear duration-[500ms] hover:-translate-y-2 border-[2.5px] border-zinc-500 rounded-2xl overflow-hidden cursor-pointer ">
          <img
            src={assert.pic_2}
            alt="pic_2"
            className="rounded-t-2xl w-auto h-[190px] "
          />
          <h4 className="text-center text-lg py-2 font-bold">Web Design</h4>
        </article>
        <article className="flex flex-col gap-4 transition-all ease-linear duration-[500ms] hover:-translate-y-2 border-[2.5px] border-zinc-500 rounded-2xl overflow-hidden cursor-pointer ">
          <img
            src={assert.pic_3}
            alt="pic_3"
            className="rounded-t-2xl w-auto h-[190px] "
          />
          <h4 className="text-center text-lg py-2 font-bold">Web Design</h4>
        </article>
        <article className="flex flex-col gap-4 transition-all ease-linear duration-[500ms] hover:-translate-y-2 border-[2.5px] border-zinc-500 rounded-2xl overflow-hidden cursor-pointer ">
          <img
            src={assert.pic_4}
            alt="pic_4"
            className="rounded-t-2xl w-auto h-[190px] "
          />
          <h4 className="text-center text-lg py-2 font-bold">Web Design</h4>
        </article>
        <article className="flex flex-col gap-4 transition-all ease-linear duration-[500ms] hover:-translate-y-2 border-[2.5px] border-zinc-500 rounded-2xl overflow-hidden cursor-pointer ">
          <img
            src={assert.pic_5}
            alt="pic_5"
            className="rounded-t-2xl w-auto h-[190px] "
          />
          <h4 className="text-center text-lg py-2 font-bold">Web Design</h4>
        </article>
      </section>
    </>
  );
};
 
export default Projects;