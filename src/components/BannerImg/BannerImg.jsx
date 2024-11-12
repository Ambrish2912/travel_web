import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerImg = ({ img, height = "650px", altText = "Banner Image" }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height,
  };

  return (
    <div
      data-aos="zoom-in"
      className="w-full"
      style={bgImage}
      aria-label={altText}
    ></div>
  );
};

BannerImg.defaultProps = {
  img: "default-image-url.jpg",
};

export default BannerImg;
