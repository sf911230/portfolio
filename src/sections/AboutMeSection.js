import React from "react";
import Section from "../components/Section";
import SimpleSlider from "../components/SimpleSlider";
import profileImage from "../assets/images/profileImage.jpg";
import locationIcon from "../assets/images/location.png";
import languagesIcon from "../assets/images/languages.png";
import tasksIcon from "../assets/images/tasks.png";
import typo3 from "../assets/images/typo3.png";
import reactLogo from "../assets/images/reactLogo.png";
import htmlCssJs from "../assets/images/htmlJsCssIcon.png";
import projects from "../assets/images/projects.jpg";
import cvLogo from "../assets/images/cvLogo.png";

const AboutMeSection = ({ sectionRefs }) => {
  const placeName = "Tenevo, Bulgaria";
  const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(
    placeName
  )}`;
  const linkedInUrl = `https://www.linkedin.com/in/stefani-fiykova-dimitrova-093048141`;

  return (
    <Section
      index={1}
      sectionRefs={sectionRefs}
      sectionClass="about-me-section"
      isBackgroundLight={true}
    >
      <h1 className="section-headline"> About me </h1>
      <SimpleSlider>
        <div>
          <div className="slide-wrapper">
            <div className="slide-info-wrapper">
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                <img
                  className="slide-info-img profile-img"
                  src={profileImage}
                  alt="Profile"
                />
              </a>
              <h3>Stefani Fiykova-Dimitrova</h3>
            </div>
            <div className="slide-info-wrapper">
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <img
                  className="slide-info-img"
                  src={locationIcon}
                  alt="Location"
                />
              </a>
              <h3> Bulgaria,Tenevo </h3>
            </div>
            <div className="slide-info-wrapper">
              <img
                className="slide-info-img"
                src={languagesIcon}
                alt="Languages"
              />
              <h3>English and Geman (but just basics)</h3>
            </div>
            <div className="slide-info-wrapper">
              <a href="/CvEnglish.pdf" download>
                <img className="slide-info-img" src={cvLogo} alt="CV" />
              </a>
              <h3>Download</h3>
            </div>
          </div>
        </div>
        <div>
          <div className="slide-info-wrapper">
            <p>
              My journey into the world of programming began about 7-8 years ago
              when I realized that accounting wasn't for me, and I decided to
              pursue a more flexible and dynamic career.
            </p>

            <p>
              At that time, there were significantly fewer courses and tutorials
              available online, so I embarked on a self-learning path using all
              available online resources.
            </p>

            <p>
              These efforts helped me land a job at a small start-up company,
              where I joined a fantastic team of young and ambitious people. In
              the first few years, I worked on-site in the office in Sofia, but
              for the last 5 years, I have been working fully remotely, which
              has greatly improved my skills in self-discipline, focus, and
              organization.
            </p>
          </div>
        </div>
        <div>
          <div className="slide-info-wrapper">
            <p>
              Throughout the years, I have worked on a wide variety of projects,
              which has allowed me to gain a broad understanding of different
              technologies and approaches. However, this also meant that I
              couldn’t focus on mastering one specific technology. I have worked
              on tasks such as:
            </p>
            <div className="slide-list-wrapper">
              <img className="slide-info-img" src={tasksIcon} alt="Tasks" />
              <ul>
                <li>Bug detection and fixing</li>
                <li>Testing functionalities (QA)</li>
                <li>Optimizing mobile design for existing websites</li>
                <li>
                  Reusing existing modules with new content for a project for a
                  well-known automotive brand
                </li>
                <li>
                  Completing a project on WordPress and building small one-page
                  websites
                </li>
                <li>Creating Newsletters</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="slide-info-wrapper">
            <p>
              The first major challenge for me was participating in a long-term
              project, which took me to training in Germany. The project used
              TYPO3 – a CMS platform primarily popular in Germany, the
              Netherlands, and France. Although this technology wasn't entirely
              my preference, I managed to gain valuable lessons and
              significantly strengthen my relationships with the team.
            </p>
            <img
              className="slide-info-img img-with-background"
              src={typo3}
              alt="Typo3"
            />
          </div>
        </div>
        <div>
          <div className="slide-info-wrapper">
            <p>
              After this project, I worked on simpler websites based on
              JavaScript, CSS, and HTML, where the focus was on pixel-perfect
              and responsive design. These projects also gave me some basic
              skills in Photoshop. During the pandemic, I started my first
              project with React – a system for reporting technical issues in
              office buildings, which was a significant challenge for me.
              Besides my basic knowledge of React, I had to quickly adapt to
              working with Material UI and transforming functional components
              into class-based ones.
            </p>
            <img className="slide-info-img" src={htmlCssJs} alt="Html,Css,Js" />
          </div>
        </div>
        <div>
          <div className="slide-info-wrapper">
            <p>
              After a 2-year maternity break, I returned to a React project
              related to a van ordering system for a well-known car brand.
              Rewriting the integrated 3D Siemens Viewer from JavaScript to
              React was a key part of my tasks. My projects have mainly been
              based on JavaScript (mostly jQuery), CSS (Sass, Less), and HTML,
              focusing on design precision and responsive functionality.
            </p>
            <img className="slide-info-img" src={projects} alt="Projects" />
          </div>
        </div>
        <div>
          <div className="slide-info-wrapper">
            <p>
              In the past year and a half, my focus has been primarily on React,
              with a few exceptions. I also have experience integrating REST
              APIs into React projects, using HTTP methods for retrieving,
              sending, and updating data via fetch and Axios.
            </p>
            <img className="slide-info-img" src={reactLogo} alt="React" />
          </div>
        </div>
        <div>
          <div className="slide-info-wrapper">
            <p>
              My role has typically been as an executor, working in teams of 2-3
              people, with a lead responsible for the project's overall
              architecture, task distribution, and code reviews. In some of the
              projects I have also communicated with clients regarding specifics
              on the tasks. During the years I have worked in Scrum teams. Have
              experience using tools like Jira and Figma. In all projects, I’ve
              used Git for version control and resolving merge conflicts.
            </p>
            <p>
              As a person, I am positive, adaptable, and calm, I work well in
              teams, and I am also responsible and motivated for professional
              development.
            </p>
          </div>
        </div>
      </SimpleSlider>
    </Section>
  );
};

export default AboutMeSection;
