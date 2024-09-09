"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { SiBootstrap } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiWebpack } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiMongodb } from "react-icons/si";

const Logos = () => {
  const router = useRouter();

  const logoWebsites = {
    Javascript: "https://www.javascript.com/",
    HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    React: "https://react.dev/",
    Next: "https://nextjs.org/",
    Bootstrap: "https://getbootstrap.com/",
    SASS: "https://sass-lang.com/",
    Tailwind: "https://tailwindcss.com/",
    Express: "https://expressjs.com/",
    MongoDB: "https://www.mongodb.com/",
    Git: "https://git-scm.com/",
    GitHub: "https://github.com/",
    VSCode: "https://code.visualstudio.com/",
    Webpack: "https://webpack.js.org/",
    Jest: "https://jestjs.io/",
    Cypress: "https://www.cypress.io/",
  };

  const onLogoClick = (website) => {
    router.push(website);
  };

  return (
    <section className="py-10">
      <div className="max-w-3xl mx-auto overflow-x-scroll flex space-x-8 px-4 py-2 scroll-container">
        <IoLogoJavascript
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() => onLogoClick(logoWebsites.Javascript)}
        />
        <IoLogoHtml5
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() => onLogoClick(logoWebsites.HTML)}
        />
        <IoLogoCss3
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() => onLogoClick(logoWebsites.CSS)}
        />

        <IoLogoReact
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() => onLogoClick(logoWebsites.React)}
        />
        <RiNextjsFill
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() => onLogoClick(logoWebsites.Next)}
        />
        <SiBootstrap
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() => onLogoClick(logoWebsites.Bootstrap)}
        />
        <SiSass
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() => onLogoClick(logoWebsites.SASS)}
        />
        <RiTailwindCssFill
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() => onLogoClick(logoWebsites.Tailwind)}
        />

        <SiExpress
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() => onLogoClick(logoWebsites.Express)}
        />
        <SiMongodb
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() => onLogoClick(logoWebsites.MongoDB)}
        />

        <FaGitAlt
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() => onLogoClick(logoWebsites.Git)}
        />
        <IoLogoGithub
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() => onLogoClick(logoWebsites.GitHub)}
        />
        <VscVscode
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() => onLogoClick(logoWebsites.VSCode)}
        />

        <SiWebpack
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() => onLogoClick(logoWebsites.Webpack)}
        />

        <SiJest
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() => onLogoClick(logoWebsites.Jest)}
        />
        <SiCypress
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() => onLogoClick(logoWebsites.Cypress)}
        />
      </div>
    </section>
  );
};

export default Logos;
