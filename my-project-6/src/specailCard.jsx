import React from "react";
import asserts from "./asserts/asserts";
const SpecailCard = () => {
  return (
    <>
      <section className="my-4 border-[2px] rounded-2xl shadow-2xl  p-2 mx-4 bg-gradient-to-b from-amber-400 via-white to-green-300 min-[992px]:grid min-[992px]:grid-cols-2 min-[992px]:gap-4 min-[992px]:p-3 min-[992px]:max-w-[768px] min-[992px]:mx-auto">
        <figure className="relative top-0 left-0 min-[600px]:grid min-[600px]:grid-cols-3 min-[600px]:gap-2 min-[600px]:grid-rows-1 min-[768px]:grid-rows-2 min-[992px]:order-2">
          <img
            src={asserts.beach_house}
            alt="beach_house"
            className="rounded-2xl w-full h-[300px]  min-[600px]:h-full object-center object-cover block  min-[768px]:row-span-3 min-[992px]:col-span-3 min-[992px]:h-[300px]"
          />
          <img
            src={asserts.house_interior}
            alt="house_interior"
            className="hidden rounded-xl w-full min-[600px]:h-[250px] min-[768px]:h-[180px] object-center object-cover min-[600px]:block min-[768px]:col-span-2 min-[992px]:col-span-1"
          />
          <img
            src={asserts.house_hall}
            alt="house_hall"
            className="hidden rounded-xl w-full min-[600px]:h-[250px] min-[768px]:h-[180px]  object-center object-cover min-[600px]:block  min-[768px]:col-span-2"
          />
          <div className="absolute bottom-[20px] left-[10px] font-sans tracking-wide min-[600px]:hidden transition-all ease-in-out duration-[500ms]">
            <h4 className="text-sm font-medium text-white">Entire house</h4>
            <h1 className="text-base font-medium text-zinc-900">
              Beach House in Collingwood
            </h1>
          </div>
        </figure>
 
        <figcaption className="my-3 font-sans min-[600px]:grid min-[600px]:grid-cols-2 min-[600px]:px-2 min-[600px]:gap-4 min-[992px]:order-1 min-[992px]:gap-2">
          <div className="hidden font-sans tracking-wide min-[600px]:block min-[600px]:col-span-3 ">
            <h4 className="text-base font-medium text-zinc-700 min-[992px]:text-lg">
              Entire house
            </h4>
            <h1 className="text-xl font-medium text-zinc-900 min-[992px]:text-2xl">
              Beach House in Collingwood
            </h1>
          </div>
          <div className="flex gap-2 my-3 flex-wrap min-[600px]:col-span-2 min-[600px]:self-center min-[992px]:col-span-3">
            <p className="flex">
              <svg
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                className="mr-1 stroke-current text-[#1B56FD] text-xl"
              >
                <path
                  d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              <span className="text-[#1B56FD] text-sm font-medium ">
                4.89 <span className="text-lime-600">(129)</span>
              </span>
            </p>
            <p className="flex ">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 text-lime-600"
                aria-hidden="true"
              >
                <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
              </svg>
              <span className="text-sm font-medium text-lime-600">
                Collingwood, Ontario
              </span>
            </p>
          </div>
          <button className="px-3 py-2.5 bg-[#4379F2] text-white text-base rounded-xl my-4 font-medium tracking-wide min-[992px]:px-2.5">
            Check Availability
          </button>
          <p className="text-base font-sans leading-6 text-[#808D7C] text-medium text-justify px-2 min-[600px]:col-span-3">
            This sunny and spacious room is for those traveling light and
            looking for a comfy and cosy place to lay their head for a night or
            two. This beach house sits in a vibrant neighborhood littered with
            cafes, pubs, restaurants and supermarkets and is close to all the
            major attractions such as Edinburgh Castle and Arthur's Seat.
          </p>
        </figcaption>
      </section>
    </>
  );
};
 
export default SpecailCard;