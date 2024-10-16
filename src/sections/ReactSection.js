import React, { useState, useEffect } from "react";
import defaultImage from "../assets/images/reactLapTop.png";
import hoverImage from "../assets/images/reactLapTopBack.png";
import Section from "../components/Section";

const ReactSection = ({ sectionRefs }) => {
  const [imageSrc, setImageSrc] = useState(defaultImage);

  useEffect(() => {
    const swapImages = () => {
      setImageSrc((prevSrc) =>
        prevSrc === defaultImage ? hoverImage : defaultImage
      );
    };

    const intervalId = setInterval(swapImages, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleMouseEnter = () => {
    setImageSrc(hoverImage);
  };

  const handleMouseLeave = () => {
    setImageSrc(defaultImage);
  };

  return (
    <Section
      index={3}
      sectionRefs={sectionRefs}
      sectionClass="react-section"
      isBackgroundLight={true}
    >
      <h1 className="section-headline">React</h1>
      <p className="react-section-quote">
        "React is a game-changer not because it changes the UI, but because it
        changes how we think about the UI."
      </p>
      <img
        className="react-section-image"
        src={imageSrc}
        alt="Hover to change"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </Section>
  );
};

export default ReactSection;
