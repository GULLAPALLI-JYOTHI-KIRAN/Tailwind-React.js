import React from "react";
import { icons, logo } from "./asserts/asserts";
import useAllContext from "./context";
 
const Navbar = () => {
  const { toggle, setToggle } = useAllContext();
 
  return (
    <>
      <div className="w-full pt-3 pb-1 pl-2 pr-3  flex flex-row items-center justify-between bg-green-500 min-[992px]:pr-8 min-[992px]:pb-2 min-[992px]:max-h-[60px]">
        <div className="log-component w-[78px] min-[992px]:w-[100px]">
          <img
            src={logo.photography_logo}
            alt={"photography_logo"}
            className="w-auto h-auto cursor-pointer"
          />
        </div>
        <nav className="my-10 hidden min-[992px]:block">
          <ul className="flex flex-row gap-4 justify-evenly items-center">
            <li className="text-lg tracking-wide p-1 rounded-lg transition-all ease-linear duration-[300ms] hover:bg-white">
              <a href="#">Home</a>
            </li>
            <li className="text-lg tracking-wide p-1 rounded-lg transition-all ease-linear duration-[300ms] hover:bg-white">
              <a href="#">Free Courses</a>
            </li>
            <li className="text-lg tracking-wide p-1 rounded-lg transition-all ease-linear duration-[300ms] hover:bg-white">
              <a href="#">Meet The Founder</a>
            </li>
            <li className="text-lg tracking-wide p-1 rounded-lg transition-all ease-linear duration-[300ms] hover:bg-white">
              <a href="#">Blogs</a>
            </li>
          </ul>
        </nav>
        <div
          className="hamberg-icon w-[28px] cursor-pointer min-[992px]:hidden"
          onClick={(e) => {
            e.preventDefault();
            setToggle(!toggle);
          }}
        >
          <img src={icons.menu} alt="menu" className="w-auto" />
        </div>
      </div>
    </>
  );
};
export default Navbar;
 