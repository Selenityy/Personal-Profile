import React from "react";

const WorkExperienceEntry = ({
  title,
  company,
  startDate,
  endDate,
  responsibilities,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <time dateTime={startDate}>
        {new Date(startDate).toLocaleDateString("en-US", {
          month: "2-digit",
          year: "numeric",
        })}
      </time>{" "}
      -{" "}
      <time dateTime={endDate}>
        {new Date(endDate).toLocaleDateString("en-US", {
          month: "2-digit",
          year: "numeric",
        })}
      </time>
      <ul className="list-disc list-inside">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperienceEntry;
