"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const homeClick = () => {
    router.push("/");
  };

  const aboutClick = () => {
    router.push("/about");
  };

  const projectsClick = () => {
    router.push("/projects");
  };

  const resumeClick = () => {
    router.push("/resume");
  };

  const contactClick = () => {
    router.push("/contact");
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="flex justify-between">
        <div onClick={homeClick}>Home</div>
        <div onClick={aboutClick}>About</div>
        <div onClick={projectsClick}>Projects</div>
        <div onClick={resumeClick}>Resume</div>
        <div onClick={contactClick}>Contact</div>
      </nav>
    </header>
  );
};

export default Header;
