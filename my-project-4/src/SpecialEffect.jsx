import React, { useEffect } from "react";
import "./SpecialEffect.css";
const SpecialEffect = () => {
  useEffect(() => {
    const parent = document.getElementById("parent-pop");
 
    function popIns() {
      const child = document.createElement("span");
      const randomValue = Math.round(Math.abs(Math.random() * 100)) - 23;
      child.classList.add(
        "bg-cyan-500",
        "absolute",
        "rounded-full",
        `w-[${randomValue}px]`,
        `h-[${randomValue}px]`,
        `bottom-[${Math.round(Math.abs(Math.random() * 10))}px]`,
        `left-[${Math.round(Math.abs(Math.random() * 1000) + 4 * 4)}px]`,
        "pop-in-effect"
      );
      setTimeout(() => {
        child.classList.add("hidden");
      }, 3000);
 
      parent.appendChild(child);
    }
    let vaildInternal = setInterval(() => {
      popIns();
    }, 300);
 
    return () => clearInterval(vaildInternal);
  }, []);
  return (
    <>
      <div
        className="flex w-full h-full absolute top-0 left-0 overflow-hidden"
        id="parent-pop"
      ></div>
    </>
  );
};
 
export default SpecialEffect;
