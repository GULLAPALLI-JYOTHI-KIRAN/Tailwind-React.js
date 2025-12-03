import React from "react";
import EachCard from "./eachCard";
const Interface = () => {
  return (
    <>
      <section className="bg-transparent backdrop-blur-sm flex flex-col gap-4 my-3 mx-2 font-mono max-w-[608px] sm:mx-auto min-[600px]:shadow-2xl  min-[600px]:pt-4 min-[600px]:p-3 min-[600px]:rounded-2xl">
        <header className="grid grid-cols-1 gap-4">
          <div className="flex justify-between items-center gap-4">
            <h2 className="text-lg font-semibold self-center">Projects</h2>
            <button className="bg-blue-500 text-white px-2.5 py-1.5 rounded-lg text-xl transition-all duration-[500ms] ease-in-out hover:bg-blue-400">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="inline mr-1.5 align-middle "
                aria-hidden="true"
              >
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              New
            </button>
          </div>
          <form className="group transition-all duration-[500ms] ease-in-out">
            <div className=" border-[2px] px-1 py-1.5 flex items-center group-focus-within:border-blue-600 rounded-lg">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="inline mr-1.5 align-middle text-white pointer-events-none group-focus-within:text-blue-600"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
              </svg>
              <input
                type="text"
                name="project_name"
                id="project-name"
                placeholder="Filter projects..."
                className="focus:outline-0 w-full bg-transparent placeholder:text-white"
              />
            </div>
          </form>
        </header>
        <section className="my-4 flex flex-col gap-4 min-[600px]:gap-8 min-[600px]:grid min-[600px]:grid-cols-2">
          <EachCard heading={"API Integrating"} title={"Engineering"} />
          <EachCard heading={"New Benifits Plan"} title={"Human Resource"} />
          <EachCard heading={"Onboarding Mails"} title={"Customer Success"} />
          <EachCard />
        </section>
      </section>
    </>
  );
};
 
export default Interface;