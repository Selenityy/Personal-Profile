"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { GoMoveToTop } from "react-icons/go";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const router = useRouter();
  const iconWebsites = {
    GitHub: "https://github.com/Selenityy",
    LinkedIn: "https://www.linkedin.com/in/selenakrodriguez/",
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".contact");

    const observe = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
          // else {
          //     entry.target.classList.remove("show");
          // }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observe.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observe.unobserve(section);
      });
    };
  }, []);

  const onArrowClick = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onIconClick = (website) => {
    router.push(website);
  };

  return (
    <section id="contact" className="min-h-screen py-24">
      <h1 className="font-victorian-demo text-8xl font-bold text-color font-light">
        Contact
      </h1>
      <div className="flex justify-evenly items-center mt-16 contact">
        <IoLogoGithub
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() => onIconClick(iconWebsites.GitHub)}
        />
        <IoLogoLinkedin
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() => onIconClick(iconWebsites.LinkedIn)}
        />
        <MdEmail
          className="size-14 logos shrink-0 transition-transform ease-in-out duration-300 hover:scale-125"
          onClick={() =>
            (window.location.href =
              "mailto:selenardev@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect")
          }
        />
      </div>
      <div>
        <div className="flex items-center justify-center mt-40">
          <GoMoveToTop
            onClick={onArrowClick}
            className="animate-bounce arrow-up-color size-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
