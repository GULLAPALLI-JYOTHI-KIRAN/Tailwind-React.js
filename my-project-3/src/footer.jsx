import React from "react";
 
const Footer = () => {
  return (
    <>
      <footer className="bg-[#4ae172] mt-8 p-4 flex flex-col gap-4 font-mono min-[650px]:gap-8">
        <section className="grid grid-cols-1 gap-4 mt-6 min-[650px]:grid-cols-3">
          <nav className="text-black text-center order-2">
            <h4 className="font-bold text-xl mb-4">Site Menu</h4>
            <ul>
              <li className="text-base text-light">About Us</li>
              <li className="text-base text-light">Photography</li>
              <li className="text-base text-light">Lens Database</li>
              <li className="text-base text-light">Lens Index</li>
            </ul>
          </nav>
          <nav className="text-black text-center order-3 ">
            <h4 className="font-bold text-xl mb-4">Reviews</h4>
            <ul>
              <li className="text-base text-light">Reviews Archive</li>
              <li className="text-base text-light">Camer Reviews</li>
              <li className="text-base text-light">Lens Reviews</li>
              <li className="text-base text-light">Other Gear Reviews</li>
            </ul>
          </nav>
          <nav className="text-black text-center  ">
            <h4 className="font-bold text-xl mb-4">More</h4>
            <ul>
              <li className="text-base text-light">Contact Us</li>
              <li className="text-base text-light">Subscribe</li>
              <li className="text-base text-light">Workshops</li>
              <li className="text-base text-light">Support Us</li>
            </ul>
          </nav>
        </section>
        <p className="text-lg font-semibold text-center text-black mb-6">
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
 