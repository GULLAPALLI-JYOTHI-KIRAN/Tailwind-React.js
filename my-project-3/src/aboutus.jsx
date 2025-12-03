import React from "react";
 
const Aboutus = () => {
  return (
    <>
      <section className="my-10 flex flex-col gap-4 px-6 min-[650px]:flex-row min-[650px]:justify-around">
        <article className="min-[992px]:w-[30%]">
          <p className="text-lg text-justify tracking-wide font-light">
            <span className="text-xl font-bold">Photography</span> is the art,
            application, and practice of creating durable images by recording
            light, either electronically by means of an image sensor, or
            chemically by means of a light-sensitive material such as
            photographic film.
          </p>
          <div className="flex mt-4 flex-row gap-4  items-center">
            <div className="w-[200px] h-[5px] bg-black rounded-2xl min-[425px]:max-w-[120px]"></div>
            <div className="w-[30px] h-[30px] bg-green-500 rounded-full"></div>
            <div className="w-[30px] h-[30px] bg-black rounded-full"></div>
          </div>
        </article>
        <article className="min-[992px]:self-center">
          <p className="text-center text-4xl font-bold text-green-400 mt-4 font-mono tracking-wide min-[650px]:text-5xl">
            <span className="text-black">What is</span>
            <br />
            Photography
          </p>
        </article>
      </section>
    </>
  );
};
 
export default Aboutus;
