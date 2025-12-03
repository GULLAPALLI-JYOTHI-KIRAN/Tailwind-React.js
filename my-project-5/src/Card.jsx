import React, { useEffect } from "react";
import asserts from "./asserts/asserts";
import { useMenu } from "./context";
const Card = () => {
  const [Menu] = useMenu();
  useEffect(() => {
    const parent = document.querySelector("section");
    [...parent.children].forEach((child) => {
      if (Menu !== child.id) {
        child.classList.add("hidden");
      }
      if (Menu == child.id) {
        child.classList.remove("hidden");
      }
    });
  }, [Menu]);
  return (
    <>
      <section className="grid grid-cols-1 gap-2 mb-5">
        <article
          className="transition-all ease-in-out duration-[500ms] my-1 mx-3 rounded-2xl border-[2px] overflow-hidden font-sans min-[375px]:max-w-[345px] min-[375px]:mx-auto sm:max-w-[515px]"
          id="Simple"
        >
          <figure className="flex flex-col gap-4 sm:flex-row sm:gap-2 ">
            <div className="h-[300px] overflow-hidden">
              <img
                src={asserts.kid_pic}
                alt="kid_pic"
                className="w-full h-full object-fill"
              />
            </div>
            <figcaption className="flex flex-col gap-4 mt-3 px-3 sm:mt-0 sm:pt-3">
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-medium text-slate-900">
                  Kids Jumpsuit
                </h1>
                <h4 className="text-base font-medium text-slate-400">
                  In stock
                </h4>
              </div>
              <h2 className="text-3xl text-purple-500 font-bold">$39.00</h2>
              <div className="flex justify-start items-center gap-4 text-sm font-semibold sm:justify-start sm:gap-8">
                <p className="text-white bg-purple-500 p-1 text-center rounded-full w-[30px] h-[30px] cursor-pointer">
                  XS
                </p>
                <p className="text-purple-400 text-center p-1 cursor-pointer ">
                  S
                </p>
                <p className="text-purple-400 text-center p-1 cursor-pointer ">
                  M
                </p>
                <p className="text-purple-400 text-center p-1 cursor-pointer ">
                  L
                </p>
                <p className="text-purple-400 text-center p-1 cursor-pointer ">
                  XL
                </p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <button className="bg-purple-500 py-2.5 px-2.5 rounded-2xl text-base text-white font-medium cursor-pointer">
                  Buy now
                </button>
                <button className="py-2.5 px-2 rounded-2xl text-base font-medium border-[1px] border-zinc-300 cursor-pointer">
                  Add to tag
                </button>
                <button className="p-3 flex justify-center   rounded-full cursor-pointer border-[1.5px]">
                  <svg width="20" height="20" fill="#A020F0" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    />
                  </svg>
                </button>
              </div>
              <p className="my-3 text-sm  font-medium text-slate-700">
                Free shipping on all continental US orders.
              </p>
            </figcaption>
          </figure>
        </article>
        <article
          className="transition-all ease-in-out duration-[500ms] my-1 mx-3 rounded-2xl border-[2px] overflow-hidden font-sans min-[375px]:max-w-[345px] min-[375px]:mx-auto sm:max-w-[515px]"
          id="Playful"
        >
          <figure className="flex flex-col gap-4 sm:flex-row sm:gap-2 ">
            <div className="h-[300px] overflow-hidden">
              <img
                src={asserts.men_pic}
                alt="kid_pic"
                className="w-full h-full object-fill"
              />
            </div>
            <figcaption className="flex flex-col gap-4 mt-3 px-3 sm:mt-0 sm:pt-3">
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-medium text-slate-700">
                  Classic Utility Jacket
                </h1>
                <h2 className="text-lg text-zinc-500 font-bold">$110.00</h2>
              </div>
              <h4 className="text-lg font-semibold text-slate-700">In stock</h4>
              <div className="flex justify-start items-center gap-4 text-lg font-semibold sm:justify-start sm:gap-8">
                <p className="text-white bg-zinc-900 p-1 text-center rounded-xl w-[40px] h-[40px] cursor-pointer">
                  XS
                </p>
                <p className="text-zinc-800 text-center p-1 cursor-pointer ">
                  S
                </p>
                <p className="text-zinc-800 text-center p-1 cursor-pointer ">
                  M
                </p>
                <p className="text-zinc-800 text-center p-1 cursor-pointer ">
                  L
                </p>
                <p className="text-zinc-800 text-center p-1 cursor-pointer ">
                  XL
                </p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <button className="bg-zinc-800 py-2.5 px-2.5 rounded-xl text-base text-white font-medium cursor-pointer">
                  Buy now
                </button>
                <button className="py-2.5 px-2 rounded-xl text-base font-medium border-[1px] border-zinc-300 cursor-pointer">
                  Add to tag
                </button>
                <button className="p-3 flex justify-center rounded-xl cursor-pointer border-[1px]">
                  <svg width="20" height="20" fill="gray" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    />
                  </svg>
                </button>
              </div>
              <p className="my-3 text-sm  font-medium text-slate-700">
                Free shipping on all continental US orders.
              </p>
            </figcaption>
          </figure>
        </article>
        <article
          className="transition-all ease-in-out duration-[500ms] my-1 mx-3 rounded-2xl border-[2px] overflow-hidden font-sans min-[375px]:max-w-[345px] min-[375px]:mx-auto sm:max-w-[515px]"
          id="Elegant"
        >
          <figure className="flex flex-col gap-4 sm:flex-row sm:gap-2 ">
            <div className="h-[300px] overflow-hidden p-1.5">
              <img
                src={asserts.suit_pic}
                alt="kid_pic"
                className="w-full h-full object-fill rounded-2xl"
              />
            </div>
            <figcaption className="flex flex-col gap-4 mt-3 px-3 sm:mt-0 sm:pt-3">
              <h1 className="text-xl font-medium text-slate-700">
                DogTooth Style Jacket
              </h1>
              <div className="flex justify-between items-center">
                <h2 className="text-lg text-zinc-500 font-bold">$350.00</h2>
                <h4 className="text-lg font-semibold text-zinc-600">
                  In stock
                </h4>
              </div>
              <div className="flex justify-start items-center gap-4 text-base font-medium sm:justify-start sm:gap-8">
                <p className="text-black bg-zinc-200 p-2 text-center rounded-full cursor-pointer">
                  XS
                </p>
                <p className="text-zinc-400 text-center p-1 cursor-pointer ">
                  S
                </p>
                <p className="text-zinc-400 text-center p-1 cursor-pointer ">
                  M
                </p>
                <p className="text-zinc-400 text-center p-1 cursor-pointer ">
                  L
                </p>
                <p className="text-zinc-400 text-center p-1 cursor-pointer ">
                  XL
                </p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <button className="bg-zinc-800 py-2.5 px-2.5  text-base text-white font-medium cursor-pointer">
                  Buy now
                </button>
                <button className="py-2.5 px-2  text-base font-medium border-[1px] border-zinc-300 cursor-pointer">
                  Add to tag
                </button>
                <button className="p-3 flex justify-center  cursor-pointer border-[1px]">
                  <svg width="20" height="20" fill="gray" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    />
                  </svg>
                </button>
              </div>
              <p className="my-3 text-sm  font-medium text-zinc-500">
                Free shipping on all continental US orders.
              </p>
            </figcaption>
          </figure>
        </article>
        <article
          className="transition-all ease-in-out duration-[500ms] my-1 mx-3 rounded-2xl border-[2px] overflow-hidden font-mono min-[375px]:max-w-[345px] min-[375px]:mx-auto sm:min-w-[515px] sm:relative"
          id="Brutalist"
        >
          <figure className="flex flex-col gap-4">
            <div className="bg-zinc-900 p-3 overlfow-hidden sm:flex sm:h-[150px] sm:justify-between sm:">
              <div className="w-[250px] h-[250px] relative top-0 left-0  mx-auto rounded-2xl  sm:w-[200px] sm:h-[200px] sm:mx-0 ">
                {/* sm:absolute sm:top-[50px] sm:left-[20px]  sm:w-[200px] sm:h-[200px]" */}
                <img
                  src={asserts.shoes_pic}
                  alt="shoes_pic"
                  className="w-full h-full rounded-2xl object-fill object-center relative  z-10"
                />
                <div className="bg-cyan-400 w-full h-full absolute top-[5px] left-[5px] rounded-2xl "></div>
              </div>
              <div className="sm:flex sm:flex-col sm:items-start">
                <h2 className="text-2xl text-bold text-white text-center mt-6 ">
                  Handcrafted Boots
                </h2>
                <div className="text-white text-base tracking-wide flex gap-4 justify-center mt-2 mb-4">
                  <span>$500.00</span>
                  <span className="uppercase text-cyan-400">In Stock</span>
                </div>
              </div>
            </div>
            <figcaption className="flex flex-col gap-4 mt-4 mb-3 p-3 sm:items-end sm:mt-0">
              <div className="flex justify-start items-center gap-4 text-base font-medium sm:justify-start sm:gap-8">
                <p className="text-white bg-zinc-900 px-3 py-2 z-10 text-center  cursor-pointer border-r-[5px] border-cyan-300">
                  XS
                </p>
                <p className="text-zinc-700 text-center p-1 cursor-pointer ">
                  S
                </p>
                <p className="text-zinc-700 text-center p-1 cursor-pointer ">
                  M
                </p>
                <p className="text-zinc-700 text-center p-1 cursor-pointer ">
                  L
                </p>
                <p className="text-zinc-700 text-center p-1 cursor-pointer ">
                  XL
                </p>
              </div>
              <hr />
              <div className="flex justify-between items-center sm:gap-4">
                <button className="bg-cyan-400 py-2.5 px-2.5  text-base text-black border-[2px] border-black font-medium cursor-pointer">
                  Buy now
                </button>
                <button className="py-2.5 px-2  text-base font-medium border-[1px] border-zinc-300 cursor-pointer">
                  Add to tag
                </button>
                <button className="p-3 flex justify-center  cursor-pointer ">
                  <svg width="20" height="20" fill="black" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    />
                  </svg>
                </button>
              </div>
              <p className="my-3 text-xs  font-medium text-zinc-500">
                Free shipping on all continental US orders.
              </p>
            </figcaption>
          </figure>
        </article>
      </section>
    </>
  );
};
 
export default Card;