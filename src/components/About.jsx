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

      {/* Grid Container for Content */}
      <div className="md:grid md:grid-cols-3 md:grid-cols-3 gap-8 items-center about">
        {/* Image Section */}
        <div className="relative w-80 h-80">
          {/* Light Mode Frame Image */}
          <img
            src="/images/victorian-frame1.png"
            alt="Victorian Frame"
            className="w-full h-full relative z-30 dark:hidden"
          />
          {/* Dark Mode Frame Image */}
          <img
            src="/images/dark-victorian-frame1.png"
            alt="Dark Victorian Frame"
            className="w-full h-full relative z-30 hidden dark:block"
          />
          {/* Profile Picture */}
          <img
            src="/images/profilePic.png"
            alt="Profile Picture"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full object-cover z-10"
          />
        </div>

        {/* Introduction Text Section */}
        <div className="space-y-4 md:col-span-2 mb-4">
          <div className="flex gap-1.5">
            <p className="font-butler text-color text-lg">Hi, my name is</p>
            <p className="font-butler text-color text-lg">Selena Rodriguez</p>
          </div>
          <p className="font-butler text-color text-lg">
            I am a Full Stack Developer with a background in project management,
            people management, and esports, combining creativity and analytical
            skills to build impactful web applications. My coding journey has
            been entirely self-taught through a mix of guided resources, the
            support of friends, and a deep passion for problem-solving and
            creation. This self-driven approach has made me highly adaptable and
            quick to learn new technologies.
          </p>
        </div>

        {/* Additional Information Section */}
        <div className="space-y-4 md:col-span-3 mb-4">
          <p className="font-butler text-color text-lg">
            I work with modern web development technologies like JavaScript
            (ES6+), React, Next.js, Node.js, Express, and MongoDB, and I'm
            experienced with tools like Git, Webpack, and Jest for robust
            development processes. I'm also proficient in front-end tools like
            HTML, CSS, Bootstrap, Sass, and Tailwind, which help me create
            visually appealing and responsive interfaces. My recent projects,
            such as MemoBoard, a task management application, and OdinBook, a
            mock social media platform, showcase my ability to build full-stack
            solutions that are both functional and user-friendly.
          </p>
          <p className="font-butler text-color text-lg">
            I am currently looking to join a forward-thinking company where I
            can contribute my skills, collaborate with talented teams, and learn
            more about the industry from a broader perspective. I'm eager to
            take on full-stack roles where I can continue to grow, innovate, and
            make a meaningful impact.
          </p>
          <p className="font-butler text-color text-lg">
            Feel free to explore my projects, and if you’d like to connect,
            please reach out through the contacts section!
          </p>
        </div>
      </div>

      {/* Logos Section */}
      <div className="about mt-12">
        <Logos />
      </div>
    </section>
  );
};

export default About;
