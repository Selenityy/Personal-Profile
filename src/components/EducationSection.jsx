import React from "react";
import EducationEntry from "./EducationEntry";

const EducationSection = () => {
  return (
    <div>
      <h2>Education</h2>
      <EducationEntry
        school="The University of Texas at Austin"
        degree="B.A. Psychology"
        location="Austin, TX"
        startDate="2011-08"
        endDate="2014-05"
      />
      <EducationEntry
        school="The Odin Project (Self-Directed Learning)"
        degree="Full Stack Web Development"
        startDate="2022-09"
        endDate="2024-02"
      />
    </div>
  );
};

export default EducationSection;
