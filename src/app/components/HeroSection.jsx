"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 sm:text-5xl text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              Olá, eu sou{""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "o Ricardo",
                1000,
                "Desenvolvedor Mobile",
                1000,
                "Desenvolvedor Web",
                1000,
                "Desenvolvedor Full-Stack",
                1000,
                "Desenvolvedor Back-end",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ipsum dolor vitae sequi omnis eum debitis labore libero quibusdam
            totam alias praesentium hic consectetur iure recusandae voluptatibus
            quod, vero adipisci?
          </p>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 hover:bg-slate-200 text-white">
            Contate-me
          </button>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mt-3 bg-transparent hover:bg-slate-200 text-white border border-white hover:text-black">
            Download CV
          </button>
        </div>
        <div className="col-span-5">
          <div className="rounded-full bg-[#181818] w-300 h-250 relative">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            labore explicabo a odit deserunt odio non iste dolores ullam ratione
            illum, rem nihil neque soluta fugiat eos! Fugiat, unde quibusdam?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            sit necessitatibus commodi ullam placeat fugiat, labore distinctio
            debitis quae dolore excepturi, culpa minus soluta porro error
            eveniet nobis sed numquam! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Labore aut voluptas, optio ab eum maiores eius
            non, aperiam voluptate nesciunt illum quas corrupti repellat
            consectetur facere quod iure fugiat quasi?
          </div>
        </div>
      </div>
    </section>
  );
};
