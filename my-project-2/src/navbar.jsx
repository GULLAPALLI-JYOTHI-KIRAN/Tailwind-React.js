import React from "react";
 
const Navabar = () => {
  return (
    <>
      <nav className="my-6">
        <ul className="flex justify-between gap-0.5 px-3.5 min-[550px]:justify-start min-[550px]:gap-8 min-[550px] ">
          <li className="text-lg tracking-wide py-2 transition-all ease-in-out duration-[100ms] cursor-pointer hover:border-b-2 hover:border-lime-400 hover:font-bold min-[550px]:text-xl">
            Home
          </li>
          <li className="text-lg tracking-wide py-2 transition-all ease-in-out duration-[100ms] cursor-pointer hover:border-b-2 hover:border-lime-400 hover:font-bold min-[550px]:text-xl">
            Skills
          </li>
          <li className="text-lg tracking-wide py-2 transition-all ease-in-out duration-[100ms] cursor-pointer hover:border-b-2 hover:border-lime-400 hover:font-bold min-[550px]:text-xl">
            Services
          </li>
          <li className="text-lg tracking-wide py-2 transition-all ease-in-out duration-[100ms] cursor-pointer hover:border-b-2 hover:border-lime-400 hover:font-bold min-[550px]:text-xl">
            Work
          </li>
        </ul>
      </nav>
    </>
  );
};
 
export default Navabar;
 