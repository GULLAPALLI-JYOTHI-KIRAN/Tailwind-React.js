import React from "react";
 
const SpecialSideCard = () => {
  return (
    <>
      <div className=" flex justify-center bg-lime-100 p-10 relative ">
        <div className="w-[25%] h-full bg-green-400 absolute top-0 left-0 z-10 min-[900px]:w-[30%]">
          <h4 className="text-3xl font-bold pl-4 py-6 text-zinc-700">
            Services
          </h4>
        </div>
        <section className="flex flex-col gap-8  my-10 min-[650px]:grid min-[650px]:grid-cols-2 min-[650px]:justify-self-center z-20">
          <article className="flex flex-col gap-4 bg-cyan-300 p-4 rounded-lg transition-all ease-linear duration-[500ms] hover:-translate-y-2 min-[650px]:max-w-[330px] ">
            <h4 className="text-xl font-bold text-center">Web Developement</h4>
            <p className="text-base font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae blanditiis adipisci vero beatae numquam iste doloremque
              quaerat corrupti possimus. Itaque veritatis quaerat quo obcaecati
              deleniti odio blanditiis id mollitia facilis?
            </p>
          </article>
          <article className="flex flex-col gap-4 bg-zinc-700 text-white p-4 rounded-lg transition-all ease-linear duration-[500ms] hover:-translate-y-2 min-[650px]:max-w-[330px]">
            <h4 className="text-xl font-bold text-center">Analytics</h4>
            <p className="text-base font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae blanditiis adipisci vero beatae numquam iste doloremque
              quaerat corrupti possimus. Itaque veritatis quaerat quo obcaecati
              deleniti odio blanditiis id mollitia facilis?
            </p>
          </article>
          <article className="flex flex-col gap-4 bg-cyan-300 p-4 rounded-lg transition-all ease-linear duration-[500ms] hover:-translate-y-2 min-[650px]:max-w-[330px]">
            <h4 className="text-xl font-bold text-center">SEO</h4>
            <p className="text-base font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae blanditiis adipisci vero beatae numquam iste doloremque
              quaerat corrupti possimus. Itaque veritatis quaerat quo obcaecati
              deleniti odio blanditiis id mollitia facilis?
            </p>
          </article>
          <article className="flex flex-col gap-4 bg-zinc-700 text-white p-4 rounded-lg transition-all ease-linear duration-[500ms] hover:-translate-y-2 min-[650px]:max-w-[330px]">
            <h4 className="text-xl font-bold text-center">UI/UX Design</h4>
            <p className="text-base font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae blanditiis adipisci vero beatae numquam iste doloremque
              quaerat corrupti possimus. Itaque veritatis quaerat quo obcaecati
              deleniti odio blanditiis id mollitia facilis?
            </p>
          </article>
        </section>
      </div>
    </>
  );
};
 
export default SpecialSideCard;
 