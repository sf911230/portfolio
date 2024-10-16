import React from "react";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">
          &times;
        </button>
        <div className="modal-body">
          <h1 className="projects-title">{project.title}</h1>
          <h3 className="projects-label">Project Info</h3>
          <p className="projects-info">{project.projectInfo}</p>

          <h3 className="projects-label">Used Technologies</h3>
          <ul className="projects-technologies">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>

          <h3 className="projects-label">Responsibilities:</h3>
          <p className="projects-responsibilities">
            {project.responsibilities}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
