import React, { useContext } from "react";
import Section from "../components/Section";
import myVideo from "../assets/typingVideo.mp4";
import MediaBackground from "../components/MediaBackground";
import { ThemeContext } from "../context/ThemeContext";

const WelcomeSection = ({ sectionRefs }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Section
        index={0}
        sectionRefs={sectionRefs}
        sectionClass="welcome-section"
        isBackgroundLight={false}
      >
        <MediaBackground videoSrc={myVideo}>
          <h1 className="section-headline">Stefani Dimitrova</h1>
          <h3>Front-end Developer</h3>
        </MediaBackground>

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="color-mode-changer"
        >
          <span>{theme === "light" ? "Dark" : "Light"} Mode</span>
        </button>
      </Section>
    </>
  );
};

export default WelcomeSection;
