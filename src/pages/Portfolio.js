import React, { useRef } from "react";
import WelcomeSection from "../sections/WelcomeSection";
import AboutMeSection from "../sections/AboutMeSection";
import SkillsSection from "../sections/SkillsSection";
import ReactSection from "../sections/ReactSection";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";

const Portfolio = () => {
  const sectionRefs = useRef([]);

  return (
    <>
      <WelcomeSection sectionRefs={sectionRefs} />
      <AboutMeSection sectionRefs={sectionRefs} />
      <SkillsSection sectionRefs={sectionRefs} />
      <ReactSection sectionRefs={sectionRefs} />
      <ProjectsSection sectionRefs={sectionRefs} />
      <ContactSection sectionRefs={sectionRefs} />
    </>
  );
};

export default Portfolio;
