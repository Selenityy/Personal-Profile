"use client";

import React, { useState } from "react";
import Image from "next/image";

const ProjectItem = ({
  title,
  description,
  liveDemo,
  github,
  image,
  hoverImage,
}) => {
  const [isHovered, setIsHovered] = useState(false); // State to manage hover

  return (
    <li className="my-12">
      <h2 className="font-butler-bold text-2xl">{title}</h2>
      <div className="flex items-center justify-around">
        <div
          className="relative w-[35rem] h-[20rem] my-6 hover:animate-wiggle"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Light Mode Frame Image */}
          <img
            src="/images/victorian-frame2.png"
            alt="Victorian Frame"
            className="absolute w-full h-full z-30 object-contain dark:hidden"
          />
          {/* Dark Mode Frame Image */}
          <img
            src="/images/dark-victorian-frame2.png"
            alt="Dark Victorian Frame"
            className="absolute w-full h-full z-30 object-contain hidden dark:block"
          />
          {/* <Image
            src={isHovered ? hoverImage : image}
            alt={title}
            width={500}
            height={300}
            className="rounded-lg absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9/12 h-9/12 object-contain transition-all duration-1000 ease-in-out"
          /> */}

          {/* Default Image */}
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className={`rounded-lg absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9/12 h-9/12 object-contain transition-opacity duration-500 ease-in-out ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Hover Image */}
          <Image
            src={hoverImage}
            alt={`${title} Hover`}
            width={500}
            height={300}
            className={`rounded-lg absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9/12 h-9/12 object-contain transition-opacity duration-500 ease-in-out ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <div className="flex flex-col  items-start">
          <p className="font-butler">{description}</p>
          <div className="flex gap-4 mt-4">
            <div>
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline font-butler"
              >
                Live Demo
              </a>
            </div>
            <div>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline font-butler"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
