"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tabName, path) => {
    setActiveTab(tabName); // Set the active tab
    router.push(path); // Navigate to the corresponding path
  };

  return (
    <header className="px-8 py-6 bg-whisper dark:bg-goth flex items-center justify-between">
      <nav className="flex space-x-10">
        <div
          onClick={() => handleTabClick("home", "/")}
          className={`font-butler-bold tracking-wide	text-color hover:font-butler-black active:font-butler-black focus:font-butler-black cursor-pointer ${
            activeTab === "home" ? "font-butler-black text-lg" : ""
          }`}
          tabIndex={0}
        >
          Home
        </div>
        <div
          onClick={() => handleTabClick("about", "/about")}
          className={`font-butler-bold tracking-wide	 text-color hover:font-butler-black active:font-butler-black focus:font-butler-black cursor-pointer ${
            activeTab === "about" ? "font-butler-black text-lg" : ""
          }`}
          tabIndex={0}
        >
          About
        </div>
        <div
          onClick={() => handleTabClick("projects", "/projects")}
          className={`font-butler-bold tracking-wide	 text-color hover:font-butler-black active:font-butler-black focus:font-butler-black cursor-pointer ${
            activeTab === "projects" ? "font-butler-black text-lg" : ""
          }`}
          tabIndex={0}
        >
          Projects
        </div>
        <div
          onClick={() => handleTabClick("resume", "/resume")}
          className={`font-butler-bold tracking-wide	 text-color hover:font-butler-black active:font-butler-black focus:font-butler-black cursor-pointer ${
            activeTab === "resume" ? "font-butler-black text-lg" : ""
          }`}
          tabIndex={0}
        >
          Resume
        </div>
        <div
          onClick={() => handleTabClick("contact", "/contact")}
          className={`font-butler-bold tracking-wide text-color hover:font-butler-black active:font-butler-black focus:ffont-butler-black cursor-pointer ${
            activeTab === "contact" ? "font-butler-black text-lg" : ""
          }`}
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
