"use client";

import React from "react";
import ProjectList from "./ProjectList";
import { IoIosArrowDown } from "react-icons/io";

const Projects = () => {
  const onArrowClick = () => {
    const resumeSection = document.getElementById("resume");
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className=" min-h-screen py-32">
      <h1 className="font-victorian-demo text-8xl font-bold text-color font-light">
        Projects
      </h1>
      <ProjectList />
      <div>
        <IoIosArrowDown
          onClick={onArrowClick}
          className="animate-bounce arrow-color size-8"
        />
      </div>
    </section>
  );
};

export default Projects;
