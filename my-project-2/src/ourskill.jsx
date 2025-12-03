import React from "react";
import assert from "./asserts/assert";
 
const OurSkills = () => {
  return (
    <>
      <section className="flex flex-col gap-4 items-center px-4 my-8 min-[650px]:flex-row min-[650px]:justify-evenly">
        <article className="flex flex-col gap-4 items-center min-[650px]:items-start">
          <h3 className="text-2xl font-bold leading-7 min-[650px]:self-start min-[650px]:text-2xl">
            Ours <br />
            <span className="text-cyan-300">Skills</span>
          </h3>
          <p className="text-base font-light min-[650px]:w-[250px] min-[992px]:w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nemo
            tenetur optio commodi, corrupti, est nesciunt dolore ad officiis
            earum voluptatibus molestiae cum repellat placeat, eum amet!
            Voluptatibus, molestiae nemo.
          </p>
          <button className="px-8 py-2 text-black bg-cyan-400 text-lg rounded-md text-white font-semibold transition-all ease-in duration-[400ms] hover:scale-90 cursor-pointer">
            Services
          </button>
        </article>
        <div className="img-component w-full mt-8 rounded-xl overflow-hidden cursor-pointer transition-all ease-linear duration-[500ms] hover:rotate-[5deg] min-[992px]:w-[500px]">
          <img
            src={assert.pic_6}
            alt="pic_6"
            className="w-auto h-auto object-center object-cover rounded-xl transition-all ease-linear duration-[500ms] hover:scale-[1.1]"
          />
        </div>
      </section>
    </>
  );
};
 
export default OurSkills;