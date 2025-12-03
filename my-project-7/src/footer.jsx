import React from "react";
const Footer = () => {
  return (
    <>
      <footer className="font-mono p-2 text-white">
        <p className="text-base tracking-wide text-center">
          Copyright 2024-
          <span>
            {new Date().getFullYear()},Redesign By Gullapalli Jyothi Kiran.
          </span>
        </p>
      </footer>
    </>
  );
};
 
export default Footer;