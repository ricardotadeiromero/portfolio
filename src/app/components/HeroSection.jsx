import React from "react";

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Olá, eu sou o <span className="text-red-500">Ricardo</span>
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-lg lg:text-xl">
            Desenvolvedor Web Full Stack
          </p>
          <button className="px-6 py-3 rounded-full bg-white hover:bg-slate-200 text-black">
            Contate-me
          </button>
        </div>
        <div className="col-span-5">
          <div className="rounded-full bg-[#181818] w-300 h-250 relative"></div>
        </div>
      </div>
    </section>
  );
};
