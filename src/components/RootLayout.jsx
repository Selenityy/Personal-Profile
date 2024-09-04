"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";

const RootLayout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem("dark-mode");
    if (darkModePreference === "true") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  };
  return (
    <main className={`${isDarkMode ? "dark" : ""} background-floral`}>
      <div className="sticky top-0 z-50 border-b border-zinc-400">
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </div>
      <div className="container mx-auto py-4 max-w-4xl min-h-screen">
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
