"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Set the active tab
  };

  return (
    <header className="px-8 py-6 bg-whisper dark:bg-goth flex items-center justify-between">
      <nav className="flex space-x-10">
        <a
          href="#home"
          className={`font-butler-bold tracking-wide text-color hover:font-butler-black active:font-butler-black focus:font-butler-black cursor-pointer ${
            activeTab === "home" ? "font-butler-black text-lg" : ""
          }`}
          onClick={() => handleTabClick("home")}
        >
          Home
        </a>
        <a
          href="#about"
          className={`font-butler-bold tracking-wide text-color hover:font-butler-black active:font-butler-black focus:font-butler-black cursor-pointer ${
            activeTab === "about" ? "font-butler-black text-lg" : ""
          }`}
          onClick={() => handleTabClick("about")}
        >
          About
        </a>
        <a
          href="#projects"
          className={`font-butler-bold tracking-wide text-color hover:font-butler-black active:font-butler-black focus:font-butler-black cursor-pointer ${
            activeTab === "projects" ? "font-butler-black text-lg" : ""
          }`}
          onClick={() => handleTabClick("projects")}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`font-butler-bold tracking-wide text-color hover:font-butler-black active:font-butler-black focus:font-butler-black cursor-pointer ${
            activeTab === "contact" ? "font-butler-black text-lg" : ""
          }`}
          onClick={() => handleTabClick("contact")}
        >
          Contact
        </a>
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
