"use client";

import React from "react";
import { GoMoveToTop } from "react-icons/go";

const Contact = () => {
  const onArrowClick = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="min-h-screen py-32">
      <h1 className="font-victorian-demo text-8xl font-bold text-color font-light">
        Contact
      </h1>
      <div>
        <div>Form</div>
        <div>Name</div>
        <div>Email</div>
        <div>Message</div>
        <button>Submit</button>
      </div>
      <div>
        <GoMoveToTop
          onClick={onArrowClick}
          className="animate-bounce arrow-color size-8"
        />
      </div>
    </section>
  );
};

export default Contact;
