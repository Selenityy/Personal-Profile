"use client";

import React from "react";
import EducationSection from "./EducationSection";
import WorkExperienceSection from "./WorkExperienceSection";
import { IoIosArrowDown } from "react-icons/io";

const Resume = () => {
  const onArrowClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="resume" className="min-h-screen py-32">
      <h1 className="font-victorian-demo text-8xl font-bold text-color font-light">
        Resume
      </h1>
      <EducationSection />
      <WorkExperienceSection />
      <div>
        <IoIosArrowDown
          onClick={onArrowClick}
          className="animate-bounce arrow-color size-8"
        />
      </div>
    </section>
  );
};

export default Resume;
