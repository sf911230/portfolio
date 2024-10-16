import React, { useState, useEffect } from "react";
import Section from "../components/Section";
import MediaBackground from "../components/MediaBackground";
import ProjectCard from "../components/ProjectsCard";
import ProjectModal from "../components/ProjectModal";
import codeBackground from "../assets/images/codeBackground.jpg";

const ProjectsSection = ({ sectionRefs }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/sf911230/2acd779b1c1f4a70c231ca635cfc8e53/raw/75f760f3126d38af0feddde836bd1aba39eda502/projectsData.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Section
      index={4}
      sectionRefs={sectionRefs}
      sectionClass="projects-section"
      isBackgroundLight={false}
    >
      <MediaBackground backgroundImage={codeBackground}>
        <h1 className="section-headline">Projects</h1>
        {loading ? (
          <p className="projects-query-message">Loading...</p>
        ) : error ? (
          <p className="projects-query-message">
            Error loading projects. {error}
          </p>
        ) : projects.length === 0 ? (
          <p className="projects-query-message">No projects available.</p>
        ) : (
          <div className="projects-card-container">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                onCardClick={() => openModal(project)}
              />
            ))}
          </div>
        )}
      </MediaBackground>

      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </Section>
  );
};

export default ProjectsSection;
