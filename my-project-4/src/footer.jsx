import React from "react";
 
const Footer = () => {
  return (
    <>
      <footer className="mt-3 p-2">
        <h3 className="text-center text-lg font-mono font-semibold">
          Copyright 2024-<span>{new Date().getFullYear()}</span>,Redesigned By
          Gullapalli Jyothi Kiran.
        </h3>
      </footer>
    </>
  );
};
 
export default Footer;