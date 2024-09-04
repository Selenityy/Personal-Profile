import "@/styles/globals.css";
import React from "react";
import RootLayout from "@/components/RootLayout";

export const metadata = {
  title: "Selena Portfolio",
};

const Layout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
};

export default Layout;
