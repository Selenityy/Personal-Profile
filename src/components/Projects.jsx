"use client";

import React from "react";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-24">
      <h1 className="font-victorian-demo text-8xl font-bold text-color font-light">
        Projects
      </h1>
      <ProjectList />
    </section>
  );
};

export default Projects;
