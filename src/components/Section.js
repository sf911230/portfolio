import React, { useEffect, useRef, useState, useContext } from "react";
import arrowSectionDownWhite from "../assets/images/arrowDownWhite.svg";
import arrowSectionDownBlack from "../assets/images/arrowDownBlack.svg";
import { ThemeContext } from "../context/ThemeContext";

const Section = ({ index, sectionRefs, children, sectionClass }) => {
  const sectionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  const { theme } = useContext(ThemeContext);
  const isBackgroundLight = theme === "light";

  useEffect(() => {
    sectionRefs.current[index] = sectionRef.current;
    setIsMounted(true);
  }, [index, sectionRefs]);

  const scrollToNextSection = () => {
    const nextSection = sectionRefs.current[index + 1];
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`section ${
        isBackgroundLight ? "light-background" : "dark-background"
      } ${sectionClass}`}
    >
      {children}
      {isMounted && index < sectionRefs.current.length - 1 && (
        <button className="next-section-button" onClick={scrollToNextSection}>
          <img
            className="next-section-arrow"
            src={
              isBackgroundLight ? arrowSectionDownBlack : arrowSectionDownWhite
            }
            alt="Next section arrow"
          />
        </button>
      )}
    </div>
  );
};

export default Section;
