import React from "react";
 
const Footer = () => {
  return (
    <>
      <footer className="font-mono p-2 text-zinc-900">
        <p className="text-lg tracking-wide text-center">
          Copyright 2024-
          <span>
            {new Date().getFullYear()},Rebuild By Gullapalli Jyothi Kiran.
          </span>
        </p>
      </footer>
    </>
  );
};
 
export default Footer;