"use client";

import React, { useEffect } from "react";
import Logos from "./Logos";

const About = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".about");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
          //   else {
          //     entry.target.classList.remove("show");
          //   }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section id="about" className="h-fit py-32">
      <h1 className="font-victorian-demo text-8xl font-bold text-color font-light">
        About
      </h1>
      <div className="flex items-center justify-around about">
        <div className="relative w-80 h-80 my-8">
          {/* Light Mode Frame Image */}
          <img
            src="/images/victorian-frame1.png"
            alt="Victorian Frame"
            className="w-full h-full relative z-30 dark:hidden"
          />
          {/* Dark Mode Frame Image */}
          <img
            src="/images/dark-victorian-frame1.png"
            alt="Victorian Frame"
            className="w-full h-full relative z-30 hidden dark:block"
          />

          {/* Profile Picture */}
          <img
            src="/images/profilePic.png"
            alt="Profile Picture"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full object-cover z-10"
          />
        </div>
        <div className="w-1/2">
          <div className="flex gap-1.5">
            <p className="font-butler text-color text-lg">Hi, my name is</p>
            <p className="font-butler text-color text-lg">Selena Rodriguez</p>
          </div>
          <p className="font-butler text-color text-lg w-full text-wrap">
            I have always been a very curious person and someone who wants to
            keep learning. With a background in psychology, content creation,
            gaming, and esports, I have a very unique skill set that blends my
            creative mind with my analytical one. Being adaptable and a fast
            learner brought me to teaching myself how to code and create
            websites! I bring my energy to all my creations and love expressing
            emotions, aesthetics, or personality to my websites.
          </p>
        </div>
      </div>
      <div className="about">
        <Logos />
      </div>
    </section>
  );
};

export default About;
