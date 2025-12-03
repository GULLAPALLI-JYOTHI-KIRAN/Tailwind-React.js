import React from "react";
 
const SpecialBenifits = () => {
  return (
    <>
      <section className="flex flex-col my-8 gap-4 min-[768px]:flex-row min-[768px]:justify-around min-[768px]:mt-14`">
        <article className="flex flex-col items-center  gap-4">
          <h1 className="font-bold text-2xl font-serif">Buy Now, Pay Later</h1>
          <p className="font-light text-base w-[45%] min-[768px]:w-[220px]">
            0% interest financing available pay after 30 days.
          </p>
          <button className="border-[2.5px] border-amber-700 border-solid mt-2 px-6 py-2 rounded text-base text-amber-700 max-w-[140px] transition-all duration-[500ms] ease-linear hover:scale-90">
            Shop Now
          </button>
        </article>
        <article className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-2xl font-serif">Cashback Reward</h1>
          <p className="font-light text-base w-[45%] min-[768px]:w-[220px]">
            Collect & Redeem on every order that you place.
          </p>
          <button className="border-[2.5px] border-amber-700 border-solid mt-2 px-6 py-2 rounded text-base text-amber-700 max-w-[140px] transition-all duration-[500ms] ease-linear hover:scale-90">
            Shop Now
          </button>
        </article>
        <article className="flex flex-col items-center gap-4 ">
          <h1 className="font-bold text-2xl font-serif">Secure Payment</h1>
          <p className="font-light text-base w-[50%] min-[768px]:w-[220px]">
            Gurantee 100% secure payment online on our website.
          </p>
          <button className="border-[2.5px] border-amber-700 border-solid mt-2 px-6 py-2 rounded text-base text-amber-700 max-w-[140px] transition-all duration-[500ms] ease-linear hover:scale-90">
            Shop Now
          </button>
        </article>
      </section>
    </>
  );
};
 
export default SpecialBenifits;
 