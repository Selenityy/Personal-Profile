"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Header = ({ toggleDarkMode, isDarkMode }) => {
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
    <header className="container mx-auto py-4 max-w-4xl background-floral">
      <nav className="flex justify-between">
        <div
          onClick={homeClick}
          className="font-poppins text-color hover:font-bold active:font-bold focus:font-bold cursor-pointer"
          tabIndex={0}
        >
          Home
        </div>
        <div
          onClick={aboutClick}
          className="font-poppins text-color hover:font-bold active:font-bold focus:font-bold cursor-pointer"
          tabIndex={0}
        >
          About
        </div>
        <div
          onClick={projectsClick}
          className="font-poppins text-color hover:font-bold active:font-bold focus:font-bold cursor-pointer"
          tabIndex={0}
        >
          Projects
        </div>
        <div
          onClick={resumeClick}
          className="font-poppins text-color hover:font-bold active:font-bold focus:font-bold cursor-pointer"
          tabIndex={0}
        >
          Resume
        </div>
        <div
          onClick={contactClick}
          className="font-poppins text-color hover:font-bold active:font-bold focus:font-bold cursor-pointer"
          tabIndex={0}
        >
          Contact
        </div>
      </nav>
      <div className="pr-4">
        {isDarkMode ? (
          <MdOutlineDarkMode
            onClick={toggleDarkMode}
            className="fill-white size-5"
          />
        ) : (
          <MdOutlineLightMode onClick={toggleDarkMode} className="size-5" />
        )}
      </div>
    </header>
  );
};

export default Header;
