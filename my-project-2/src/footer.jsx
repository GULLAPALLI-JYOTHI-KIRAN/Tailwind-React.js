import React from "react";
 
const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-700 mt-8 p-4 flex flex-col gap-4 min-[650px]:gap-8">
        <section className="grid grid-cols-1 gap-4 mt-6 min-[650px]:grid-cols-3">
          <nav className="text-white text-center order-2">
            <h4 className="font-bold text-xl mb-4">Site Menu</h4>
            <ul>
              <li className="text-base">About Us</li>
              <li className="text-base">Photography</li>
              <li className="text-base">Lens Index</li>
            </ul>
          </nav>
          <nav className="text-white text-center order-3 ">
            <h4 className="font-bold text-xl mb-4">Review</h4>
            <ul>
              <li className="text-base">Reviews Archive</li>
              <li className="text-base">Camer Reviews</li>
              <li className="text-base">Lens Reviews</li>
              <li className="text-base">Other Gear Reviews</li>
            </ul>
          </nav>
          <nav className="text-white text-center  ">
            <h4 className="font-bold text-xl mb-4">More</h4>
            <ul>
              <li className="text-base">Contact Us</li>
              <li className="text-base">Subscribe</li>
              <li className="text-base">Workshops</li>
              <li className="text-base">Support Us</li>
            </ul>
          </nav>
        </section>
        <p className="text-lg font-semibold text-center text-white mb-6">
          Copyrights 2024-
          <span>
            {new Date().getFullYear()},Made By Gullapalli Jyothi Kiran.
          </span>
        </p>
      </footer>
    </>
  );
};
 
export default Footer;