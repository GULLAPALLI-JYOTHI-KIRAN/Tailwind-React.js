import React from "react";
 
const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-700 py-8 mt-12">
        <p className="text-center capitalize text-xl text-white font-[400] tracking-wider">
          copyrights 2024-
          <span>
            {new Date().getFullYear()},Made by Gullapalli Jyothi Kiran.
          </span>
        </p>
      </footer>
    </>
  );
};
 
export default Footer;