import React from "react";
import assert from "./asserts/asserts";
 
const Founder = () => {
  return (
    <>
      <section className="flex flex-col  gap-4 my-8 px-3 min-[992px]:flex-row min-[992px]:justify-evenly">
        <div className="min-[992px]:w-[30%] overflow-hidden min-[992px]:self-center cursor-pointer transition-all ease-linear duation-[500ms] hover:saturate-150">
          <img
            src={assert.photo_man_3}
            alt="Founder"
            className="rounded-2xl w-auto h-auto object-cover z-20"
          />
        </div>
        <article className="flex flex-col gap-4 min-[992px]:w-[40%] mt-4">
          <h5 className="text-3xl font-mono font-bold min-[768px]:text-5xl">
            About <span className="text-green-500">Founder</span>
          </h5>
          <p className="text-lg font-light text-justify">
            Alec Soth is an american photographer. based in Minne a polish. Soth
            makes "large-scale American projects featuringthe midwestern United
            States, New York Times art critic Hilarie M. Sheets wrote that he
            has made a photographic career out of finding chemistry with
            strangers and photographs "loners and dreamers.
          </p>
        </article>
      </section>
    </>
  );
};
 
export default Founder;
 