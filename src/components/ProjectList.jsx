import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  const projects = [
    {
      title: "MemoBoard",
      description: "A full stack task and project management application.",
      liveDemo: "https://memo-board-frontend.vercel.app/",
      github: "https://github.com/Selenityy/MemoBoard",
      image: "image_url",
    },
    {
      title: "OdinBook",
      description: "A full stack mock social media application.",
      liveDemo: "https://odin-book-frontend.vercel.app/",
      github: "https://github.com/Selenityy/OdinBook",
      image: "image_url",
    },
    {
      title: "Weather",
      description: "A front-end forecast and weather application.",
      liveDemo: "https://selenityy.github.io/Weather_App/",
      github: "https://github.com/Selenityy/Weather_App",
      image: "image_url",
    },
    {
      title: "Memory Card",
      description: "A front-end memory card game.",
      liveDemo: "https://luminous-dango-379baf.netlify.app/",
      github: "https://github.com/Selenityy/Memory-Card/tree/main/Memory-Card",
      image: "image_url",
    },
    {
      title: "CV Application",
      description: "A front-end resume builder.",
      liveDemo: "https://lovely-lolly-c8af73.netlify.app/",
      github:
        "https://github.com/Selenityy/CV-Application/tree/main/cv-application",
      image: "image_url",
    },
    {
      title: "Restaurant",
      description: "A front-end mock restaurant website.",
      liveDemo: "https://selenityy.github.io/Restaurant-Page/",
      github: "https://github.com/Selenityy/Restaurant-Page",
      image: "image_url",
    },
    {
      title: "Tic-Tac-Toe",
      description: "A front-end tic-tac-toe web game.",
      liveDemo: "https://selenityy.github.io/Tic-Tac-Toe/",
      github: "https://github.com/Selenityy/Tic-Tac-Toe",
      image: "image_url",
    },
    {
      title: "Calculator",
      description: "A front-end calculator application.",
      liveDemo: "https://selenityy.github.io/Calculator/",
      github: "https://github.com/Selenityy/Calculator",
      image: "image_url",
    },
  ];
  return (
    <ul>
      {projects.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </ul>
  );
};

export default ProjectList;
