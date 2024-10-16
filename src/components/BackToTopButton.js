import React, { useEffect, useState } from "react";
import arrowUp from "../assets/images/arrowUp.svg";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="back-to-top-button"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <img className="back-to-top-arrow" src={arrowUp} alt="Back to Top" />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
