import React from "react";

const ProjectItem = ({ title, description, liveDemo, github, image }) => {
  return (
    <li>
      <h2>{title}</h2>
      <div>
        {/* Replace this with an <img> tag or Image component */}
        {image}
      </div>
      <p>{description}</p>
      <div>
        <a href={liveDemo} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
      <div>
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </li>
  );
};

export default ProjectItem;
