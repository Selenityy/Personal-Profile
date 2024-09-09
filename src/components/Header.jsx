"use client";

import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.1,
      }
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

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);

    const section = document.getElementById(tabName);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="px-8 py-6 bg-whisper dark:bg-goth flex items-center justify-between">
      <nav className="flex space-x-10">
        <div
          className={`font-butler-bold tracking-wide text-color hover:font-butler-black active:font-butler-black focus:font-butler-black cursor-pointer ${
            activeTab === "home" ? "font-butler-black text-lg" : ""
          }`}
          onClick={() => handleTabClick("home")}
        >
          Home
        </div>
        <div
          className={`font-butler-bold tracking-wide text-color hover:font-butler-black active:font-butler-black focus:font-butler-black cursor-pointer ${
            activeTab === "about" ? "font-butler-black text-lg" : ""
          }`}
          onClick={() => handleTabClick("about")}
        >
          About
        </div>
        <div
          className={`font-butler-bold tracking-wide text-color hover:font-butler-black active:font-butler-black focus:font-butler-black cursor-pointer ${
            activeTab === "projects" ? "font-butler-black text-lg" : ""
          }`}
          onClick={() => handleTabClick("projects")}
        >
          Projects
        </div>
        <div
          className={`font-butler-bold tracking-wide text-color hover:font-butler-black active:font-butler-black focus:font-butler-black cursor-pointer ${
            activeTab === "contact" ? "font-butler-black text-lg" : ""
          }`}
          onClick={() => handleTabClick("contact")}
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
