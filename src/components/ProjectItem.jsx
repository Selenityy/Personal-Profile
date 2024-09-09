"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProjectItem = ({
  title,
  description,
  subtitle,
  liveDemo,
  github,
  image,
  hoverImage,
  placement,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const sections = document.querySelectorAll(".projectsLeft, .projectsRight");

    const observe = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
          //   else {
          //     entry.target.classList.remove("show");
          //   }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observe.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observe.unobserve(section);
      });
    };
  });

  const handleImageClick = () => {
    router.push(liveDemo);
  };

  const handleLiveClick = () => {
    router.push(liveDemo);
  };

  const handleGitHubClick = () => {
    router.push(github);
  };

  return (
    <li
      className={`my-16 ${
        placement === "right" ? "projectsRight" : "projectsLeft"
      }`}
    >
      <div
        className={`flex items-center gap-10 ${
          placement === "right" ? "flex-row-reverse" : ""
        }`}
      >
        <div
          className="relative w-[35rem] h-[20rem] my-6 hover:animate-wiggle"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleImageClick}
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
        <div
          className={`flex flex-col ${
            placement === "right" ? "items-end" : "items-start"
          }`}
        >
          <h2 className="font-butler-black text-2xl text-color">{title}</h2>
          <h3 className="font-butler-bold text-lg text-color pb-4">
            {subtitle}
          </h3>
          <p className="font-butler text-color text-md">{description}</p>
          <div className="flex gap-3 mt-4">
            <div>
              <button
                className="px-3 py-1 border button-color font-bold rounded-lg shadow-md hover:shadow-lg active:shadow-sm active:translate-y-1 focus:outline-none transition duration-300 text-sm"
                onClick={handleLiveClick}
              >
                Live
              </button>
            </div>
            <div>
              <button
                className="px-2 py-1 border button-color font-bold rounded-lg shadow-md hover:shadow-lg active:shadow-sm active:translate-y-1 focus:outline-none transition duration-300 text-sm"
                onClick={handleGitHubClick}
              >
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
