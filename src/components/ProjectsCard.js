import React from "react";

function ProjectCard({ title, onCardClick }) {
  return (
    <div className="projects-card" onClick={onCardClick}>
      <h5 className="projects-card-title">{title}</h5>
    </div>
  );
}

export default ProjectCard;
