import React from "react";
import assert from "./asserts/assert";
const Banner = () => {
  return (
    <>
      <header className="flex flex-col gap-4 my-12 mx-6 min-[768px]:grid min-[768px]:grid-cols-2">
        <div className="img-component w-full rounded-2xl overflow-hidden transition-all ease-linear duration-[400ms] hover:scale-[0.9] min-[650px]:h-[250px] min-[768px]:self-center cursor-pointer">
          <img
            src={assert.pic_2}
            alt="pic_2"
            className="w-auto h-auto object-center object-cover rounded-2xl "
          />
        </div>
        <div className="flex flex-col gap-4 min-[650px]:my-8">
          <h1 className="text-left text-2xl font-bold">
            Web <span className="text-cyan-400">Agency</span>
          </h1>
          <p className="text-base text-justify font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            facere et natus laudantium, recusandae est temporibus maxime
            praesentium expedita dolorum aliquam cumque similique nobis, maiores
            necessitatibus aut itaque a obcaecati.
          </p>
          <div className="flex items-center gap-4">
            <button className="px-8 py-2 text-black bg-cyan-400 text-lg rounded-md text-white font-semibold transition-all ease-in duration-[400ms] hover:scale-90 cursor-pointer">
              Services
            </button>
            <button className="pb-3 border-b-[2px] border-black border-solid font-semibold cursor-pointer">
              Learn More
            </button>
          </div>
          <section className="flex flex-col gap-4 min-[650px]:flex-row min-[768px]:flex-col min-[992px]:flex-row">
            <article className="flex flex-col items-center bg-cyan-300  rounded-lg gap-4 p-3 transition-all ease-in duration-[400ms] hover:-translate-y-1 cursor-pointer">
              <h3 className="text-lg font-bold">
                5 Star <span className="font-semibold">Experience</span>
              </h3>
              <p className="text-base font-light text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                perferendis, quod voluptatem asperiores expedita aspernatur
              </p>
            </article>
            <article className="flex flex-col items-center bg-cyan-100  rounded-lg gap-4 p-3 transition-all ease-in duration-[400ms] hover:-translate-y-1 cursor-pointer">
              <h3 className="text-lg font-semibold">
                Make <span className="font-bold">Your</span> Offer
              </h3>
              <p className="text-base font-light text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                perferendis, quod voluptatem asperiores expedita aspernatur
              </p>
            </article>
          </section>
        </div>
      </header>
    </>
  );
};
 
export default Banner;
 