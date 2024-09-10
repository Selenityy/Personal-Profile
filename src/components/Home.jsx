"use client";

import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  const onArrowClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen py-32 flex flex-col items-center justify-evenly gap-x-10"
    >
      <div className="flex flex-col items-center text-center">
        <h1 className="font-victorian-decade text-8xl font-bold text-color font-light">
          Selena Rodriguez
        </h1>
        <h2 className="text-3xl text-color font-butler pt-6">
          Full Stack Developer
        </h2>
        <img
          src="/images/border2.png"
          alt="border"
          className="opacity-75 py-10 dark:invert"
        />
      </div>
      <div>
        <IoIosArrowDown
          onClick={onArrowClick}
          className="animate-bounce arrow-color size-8"
        />
      </div>
    </section>
  );
};

export default Home;
