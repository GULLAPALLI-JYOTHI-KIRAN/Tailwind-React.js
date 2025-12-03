import React from "react";
import svg, { asserts } from "./asserts/asserts.js";
const Navabar = () => {
  return (
    <>
      <nav className="flex justify-evenly items-center mt-8 min-[768px]:justify-around ">
        <div className="logo text-lg font-semibold tracking-wider font-serif min-[768px]:text-xl">
          Branding
        </div>
        <div className="flex items-center gap-4 icons">
          <img
            src={svg.search_icon}
            alt="search_icon"
            className="w-[20px] min-[768px]:w-[30px]"
          />
          <img
            src={svg.profile_icon}
            alt="profile_iocn"
            className="w-[20px] min-[768px]:w-[30px]"
          />
          <img src={svg.box_icon} alt="box-icon" className="w-[35px]" />
        </div>
      </nav>
    </>
  );
};
 
export default Navabar;