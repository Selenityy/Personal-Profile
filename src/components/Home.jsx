"use client";

import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="py-36 flex flex items-center justify-evenly gap-x-10"
    >
      <img
        src="/images/profilePic.png"
        alt="Profile Picture"
        className="rounded-full object-cover size-72"
      />
      <div className="flex flex-col items-center">
        <h1 className="font-poppins font-bold text-4xl">Selena Rodriguez</h1>
        <h2 className="text-2xl">Full Stack Developer</h2>
      </div>
    </section>
  );
};

export default Home;
