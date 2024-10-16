import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "../assets/images/arrowLeft.png";
import arrowRight from "../assets/images/arrowRight.png";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <img
      src={arrowRight}
      className="slider-arrow arrow-next"
      alt="Next"
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <img
      src={arrowLeft}
      alt="Previous"
      className="slider-arrow arrow-prev"
      onClick={onClick}
    />
  );
};

const SimpleSlider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SimpleSlider;
