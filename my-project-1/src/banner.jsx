import React, { useReducer } from "react";
import { asserts } from "./asserts/asserts";
const Banner = () => {
  return (
    <>
      <header className="flex flex-col gap-8 mt-8 text-xl min-[768px]:mt-12 min-[768px]:flex-row min-[768px]:justify-evenly ">
        <div className=" flex flex-col items-center px-4">
          <h4 className="text-2xl text-center font-bold font-serif tracking-wider min-[768px]:text-3xl  mb-4 mt-2">
            Spring / Summer Vibes
          </h4>
          <p className="text-sm text-center mb-8 w-[250px] font-light min-[768px]:w-[350px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
            quae? Voluptatem amet fuga debitis voluptatibus repudiandae harum
            quibusdam corrupti nemo?
          </p>
          <img
            src={asserts.person_look}
            alt="person_look_1"
            className="mb-4 w-[300px] h-[300px] rounded-[15px]"
          />
        </div>
        <div className=" flex flex-col items-center px-4">
          <img
            src={asserts.person_look_1}
            alt="person_look_1"
            className="mb-4 w-[300px] h-[300px] rounded-t-full mt-2"
          />
          <p className="text-sm text-center w-[250px] font-light min-[768px]:w-[350px] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
            quae? Voluptatem amet fuga debitis voluptatibus repudiandae harum
            quibusdam corrupti nemo?
          </p>
          <button className="border-[2.5px] border-amber-700 border-solid mt-2 px-6 py-2 rounded text-base text-amber-700 transition-all duration-[500ms] ease-linear hover:scale-90  ">
            Explore
          </button>
        </div>
      </header>
    </>
  );
};
 
export default Banner;