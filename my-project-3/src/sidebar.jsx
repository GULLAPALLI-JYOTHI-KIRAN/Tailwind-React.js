import React, { useEffect, useRef } from "react";
import { icons, logo } from "./asserts/asserts";
import useAllContext from "./context";
const SideBar = () => {
  const { toggle, setToggle } = useAllContext();
  const sidebar = useRef();
  useEffect(() => {
    if (toggle) {
      sidebar.current.classList.toggle("hidden");
    } else {
      sidebar.current.classList.add("hidden");
    }
  }, [toggle]);
 
  return (
    <>
      <aside
        className="fixed hidden top-0 left-0 bg-green-500 w-screen mr-0 h-full overflow-auto  pt-5 pr-3 pb-6 z-10 flex flex-col gap-4 min-[992px]:hidden"
        ref={sidebar}
      >
        <header className="flex justify-between items-center ">
          <div className="logo-component w-[90px] cursor-pointer">
            <img
              src={logo.photography_logo}
              alt="photography_logo"
              className="w-auto h-auto"
            />
          </div>
          <div
            className="close-component w-[40px] cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setToggle(!toggle);
            }}
          >
            <img src={icons.close} alt="close" className="w-auto  h-auto" />
          </div>
        </header>
        <nav className="my-8">
          <ul className="flex flex-col gap-4 items-center">
            <li className="text-xl tracking-wide p-2 rounded-lg transition-all ease-linear duration-[300ms] hover:bg-white hover:scale-90">
              <a href="#">Home</a>
            </li>
            <li className="text-xl tracking-wide p-2 rounded-lg transition-all ease-linear duration-[300ms] hover:bg-white hover:scale-90">
              <a href="#">Free Course</a>
            </li>
            <li className="text-xl tracking-wide p-2 rounded-lg transition-all ease-linear duration-[300ms] hover:bg-white hover:scale-90">
              <a href="#">Meet The Founder</a>
            </li>
            <li className="text-xl tracking-wide p-2 rounded-lg transition-all ease-linear duration-[300ms] hover:bg-white hover:scale-90">
              <a href="#">Blogs</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};
 
export default SideBar;