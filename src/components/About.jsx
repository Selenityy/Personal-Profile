"use client";

import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const About = () => {
  const onArrowClick = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="min-h-screen py-32">
      <h1 className="font-victorian-demo text-8xl font-bold text-color font-light">
        About
      </h1>
      <img
        src="/images/profilePic.png"
        alt="Profile Picture"
        className="rounded-full object-cover size-72"
      />
      <p className="font-butler">Hi, my name is Selena Rodriguez!</p>
      <p className="font-butler">
        I have always been a very curious person and someone who wants to keep
        learning. With a background in psychology, content creation, gaming, and
        esports, I have a very unique skill set that blends my creative mind
        with my analytical one. Being adaptable and a fast learner brought me to
        teaching myself how to code and create websites! I bring my energy to
        all my creations and love expressing emotions, aesthetics, or
        personality to my websites.
      </p>
      <div>
        <IoIosArrowDown
          onClick={onArrowClick}
          className="animate-bounce fill-black size-8"
        />
      </div>
    </section>
  );
};

export default About;
