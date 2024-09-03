import React from "react";

const EducationEntry = ({ school, degree, location, startDate, endDate }) => {
  return (
    <div>
      <h3>{school}</h3>
      <h4>{degree}</h4>
      {location && <p>{location}</p>}
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
    </div>
  );
};

export default EducationEntry;
