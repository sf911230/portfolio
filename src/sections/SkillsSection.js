import React from "react";
import Section from "../components/Section";
import MediaBackground from "../components/MediaBackground";
import typingBackground from "../assets/images/typingBackground.jpg";
import reactLogo from "../assets/images/reactLight.svg";
import htmlLogo from "../assets/images/html5Logo.svg";
import cssLogo from "../assets/images/css.svg";
import jsLogo from "../assets/images/javaScript.svg";
import jiraLogo from "../assets/images/jira.svg";
import figmaLogo from "../assets/images/figmaLight.svg";
import jqueryLogo from "../assets/images/jQuery.svg";
import sassLogo from "../assets/images/sass.svg";
import responsiveLogo from "../assets/images/responsiveIcon.png";
import restApiLogo from "../assets/images/restapiIcon.png";
import lessLogo from "../assets/images/lessLight.svg";
import materialUILogo from "../assets/images/materialUILight.svg";
import bootstrap from "../assets/images/bootstrap.svg";
import gitLogo from "../assets/images/git.svg";

const SkillsSection = ({ sectionRefs }) => {
  return (
    <Section
      index={2}
      sectionRefs={sectionRefs}
      sectionClass="skills-section"
      isBackgroundLight={false}
    >
      <MediaBackground backgroundImage={typingBackground}>
        <h1 className="section-headline">Skills</h1>
        <div className="skills-list">
          <div className="skills-level level-one">
            <div className="skills-logo-wrapper white-wrapper">
              <img className="skills-logo" src={htmlLogo} alt="Html Logo" />
            </div>
            <div className="skills-logo-wrapper white-wrapper">
              <img className="skills-logo" src={cssLogo} alt="CSS Logo" />
            </div>
            <div className="skills-logo-wrapper white-wrapper">
              <img className="skills-logo" src={jsLogo} alt="JS Logo" />
            </div>
            <div className="skills-logo-wrapper">
              <img className="skills-logo" src={reactLogo} alt="React logo" />
            </div>
            <div className="skills-logo-wrapper white-wrapper">
              <img
                className="skills-logo"
                src={restApiLogo}
                alt="Rest APi Logo"
              />
            </div>
          </div>

          <div className="skills-level level-second">
            <div className="skills-logo-wrapper">
              <img className="skills-logo" src={jqueryLogo} alt="Jquery logo" />
            </div>
            <div className="skills-logo-wrapper">
              <img className="skills-logo" src={sassLogo} alt="Sass logo" />
            </div>
            <div className="skills-logo-wrapper">
              <img className="skills-logo" src={lessLogo} alt="Less logo" />
            </div>
            <div className="skills-logo-wrapper">
              <img
                className="skills-logo"
                src={bootstrap}
                alt="Bootstrap logo"
              />
            </div>
            <div className="skills-logo-wrapper white-wrapper">
              <img
                className="skills-logo"
                src={responsiveLogo}
                alt="Responsive logo"
              />
            </div>
          </div>

          <div className="skills-level level-third">
            <div className="skills-logo-wrapper">
              <img
                className="skills-logo"
                src={materialUILogo}
                alt="Material Ui logo"
              />
            </div>
            <div className="skills-logo-wrapper">
              <img className="skills-logo" src={figmaLogo} alt="Figma Logo" />
            </div>
            <div className="skills-logo-wrapper white-wrapper">
              <img className="skills-logo" src={jiraLogo} alt="Jira Logo" />
            </div>
            <div className="skills-logo-wrapper">
              <img className="skills-logo" src={gitLogo} alt="Git Logo" />
            </div>
          </div>
        </div>
      </MediaBackground>
    </Section>
  );
};

export default SkillsSection;
