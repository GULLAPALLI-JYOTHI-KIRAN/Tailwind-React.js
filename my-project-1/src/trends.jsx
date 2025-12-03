import React from "react";
import { asserts } from "./asserts/asserts";
const Trends = () => {
  return (
    <>
      <section className="flex flex-col items-center my-8 gap-4 min-[768px]:flex-row min-[768px]:justify-evenly">
        <article className="flex flex-col items-center justify-center gap-4 min-[768px]:gap-8">
          <h1 className="text-center text-3xl font-bold font-serif">
            An Industrial Take
            <br />
            On Streetwear
          </h1>
          <p className="text-sm font-light w-[250px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
            quasi iure asperiores eveniet amet dolore. Laborum sit iste quisquam
            culpa?
          </p>
          <button className="border-[2.5px] border-amber-700 border-solid mt-2 px-6 py-2 rounded text-base text-amber-700 max-w-[140px] transition-all duration-[500ms] ease-linear hover:scale-90">
            Shop Now
          </button>
        </article>
        <img
          src={asserts.person_look_2}
          alt="person_look_2"
          className=" w-[250px] h-[300px] mt-4 rounded-[30px]"
        />
      </section>
    </>
  );
};
 
export default Trends;
 
 