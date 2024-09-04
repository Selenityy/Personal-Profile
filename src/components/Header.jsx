import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
