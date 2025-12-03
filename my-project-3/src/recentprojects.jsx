import React from "react";
import assert from "./asserts/asserts";
 
const RecentProject = () => {
  return (
    <>
      <h3 className="text-right text-2xl my-8 pr-4 font-mono min-[768px]:text-3xl min-[768px]:text-bold">
        <span className="text-[#4ae172]">Recent</span> Projects
      </h3>
      <section className="grid grid-cols-1 gap-4 my-1 p-4 min-[650px]:grid-cols-2 min-[992px]:grid-cols-3">
        <article className="flex flex-col gap-2 rounded-2xl border-[1.8px] cursor-pointer overflow-hidden transition-all ease-linear duration-[500ms] hover:-translate-y-2">
          <img
            src={assert.photo_man_4}
            alt=""
            className="h-[200px] rounded-t-2xl transition-all ease-linear duration-[300ms] hover:scale-x-105"
          />
          <h4 className="text-2xl text-left font-light mb-4 ml-3">
            Web Design
          </h4>
        </article>
        <article className="flex flex-col gap-2 rounded-2xl  border-[1.8px] cursor-pointer overflow-hidden transition-all ease-linear duration-[500ms] hover:-translate-y-2">
          <img
            src={assert.camera}
            alt=""
            className="h-[200px] rounded-t-2xl transition-all ease-linear duration-[300ms] hover:scale-x-105"
          />
          <h4 className="text-2xl text-left font-light mb-4 ml-3">Impract</h4>
        </article>
        <article className="flex flex-col gap-2 rounded-2xl border-[1.8px] cursor-pointer overflow-hidden transition-all ease-linear duration-[500ms] hover:-translate-y-2">
          <img
            src={assert.photo_man_2}
            alt=""
            className="h-[200px] rounded-t-2xl transition-all ease-linear duration-[300ms] hover:scale-x-105"
          />
          <h4 className="text-2xl text-left font-light mb-4 ml-3">Personal</h4>
        </article>
        <article className="flex flex-col gap-2 rounded-2xl border-[1.8px] cursor-pointer overflow-hidden transition-all ease-linear duration-[500ms] hover:-translate-y-2">
          <img
            src={assert.photo_woman_2}
            alt=""
            className="h-[200px] rounded-t-2xl transition-all ease-linear duration-[300ms] hover:scale-x-105"
          />
          <h4 className="text-2xl text-left font-light mb-4 ml-3">Nature</h4>
        </article>
        <article className="flex flex-col gap-2 rounded-2xl border-[1.8px] cursor-pointer overflow-hidden transition-all ease-linear duration-[500ms] hover:-translate-y-2">
          <img
            src={assert.photo_woman_3}
            alt=""
            className="h-[200px] rounded-t-2xl transition-all ease-linear duration-[300ms] hover:scale-x-105"
          />
          <h4 className="text-2xl text-left font-light mb-4 ml-3">Fancy</h4>
        </article>
        <article className="flex flex-col gap-2 rounded-2xl border-[1.8px] cursor-pointer overflow-hidden transition-all ease-linear duration-[500ms] hover:-translate-y-2">
          <img
            src={assert.photo_man_1}
            alt=""
            className="h-[200px] rounded-t-2xl transition-all ease-linear duration-[300ms] hover:scale-x-105"
          />
          <h4 className="text-2xl text-left font-light mb-4 ml-3">Lexcury</h4>
        </article>
      </section>
    </>
  );
};
 
export default RecentProject;