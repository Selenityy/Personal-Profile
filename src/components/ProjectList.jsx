import React from "react";
import ProjectItem from "./ProjectItem";
import Image from "next/image";

const ProjectList = () => {
  const projects = [
    {
      title: "MemoBoard",
      subtitle: "Project Management Application",
      description:
        "A full-stack task and project management application that enables users to create and manage projects, tasks, and memos efficiently.",
      liveDemo: "https://memo-board-frontend.vercel.app/",
      github: "https://github.com/Selenityy/MemoBoard",
      image: "/images/MemoBoard1.png",
      hoverImage: "/images/MemoBoard2.png",
      placement: "left",
    },
    {
      title: "OdinBook",
      subtitle: "Social Network Application",
      description:
        "A full-stack mock social media application that allows users to create a profile, write and comment on posts, and connect with others.",
      liveDemo: "https://odin-book-frontend.vercel.app/",
      github: "https://github.com/Selenityy/OdinBook",
      image: "/images/OdinBook1.png",
      hoverImage: "/images/OdinBook2.png",
      placement: "right",
    },
    {
      title: "Memory Card",
      subtitle: "Game Application",
      description:
        "A front-end memory challenge game with easy, medium, and hard modes, tracking high scores as users click unique cards without repeating.",
      liveDemo: "https://luminous-dango-379baf.netlify.app/",
      github: "https://github.com/Selenityy/Memory-Card/tree/main/Memory-Card",
      image: "/images/MemoryGame1.png",
      hoverImage: "/images/MemoryGame2.png",
      placement: "left",
    },
    {
      title: "CV Application",
      subtitle: "CV Creation Tool",
      description:
        "A front-end tool for creating professional resumes with a user-friendly interface.",
      liveDemo: "https://lovely-lolly-c8af73.netlify.app/",
      github:
        "https://github.com/Selenityy/CV-Application/tree/main/cv-application",
      image: "/images/CV1.png",
      hoverImage: "/images/CV2.png",
      placement: "right",
    },
    {
      title: "Weather Forecast App",
      subtitle: "Weather Application",
      description:
        "A front-end app that provides real-time weather forecasts and current conditions.",
      liveDemo: "https://selenityy.github.io/Weather_App/",
      github: "https://github.com/Selenityy/Weather_App",
      image: "/images/Weather1.png",
      hoverImage: "/images/Weather2.png",
      placement: "left",
    },
    {
      title: "Restaurant",
      subtitle: "Mock Restaurant",
      description:
        "A front-end mock restaurant website showcasing a menu and restaurant details.",
      liveDemo: "https://selenityy.github.io/Restaurant-Page/",
      github: "https://github.com/Selenityy/Restaurant-Page",
      image: "/images/Restaurant1.png",
      hoverImage: "/images/Restaurant2.png",
      placement: "right",
    },
    {
      title: "Tic-Tac-Toe",
      subtitle: "Game Application",
      description:
        "A front-end web game of Tic-Tac-Toe with a simple and intuitive interface.",
      liveDemo: "https://selenityy.github.io/Tic-Tac-Toe/",
      github: "https://github.com/Selenityy/Tic-Tac-Toe",
      image: "/images/TicTacToe1.png",
      hoverImage: "/images/TicTacToe2.png",
      placement: "left",
    },
    {
      title: "Calculator",
      subtitle: "Calculator Application",
      description:
        "A front-end calculator app for performing basic mathematical operations.",
      liveDemo: "https://selenityy.github.io/Calculator/",
      github: "https://github.com/Selenityy/Calculator",
      image: "/images/Calc1.png",
      hoverImage: "/images/Calc2.png",
      placement: "right",
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
