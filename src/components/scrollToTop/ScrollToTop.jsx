import React, { useEffect, useState } from "react";
import "./scrollToTop.scss";

const ScrollToTop = () => {
  const [rotationAngle, setRotationAngle] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const angle = (scrollPosition / maxScroll) * 360;
      setRotationAngle(angle);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="square"
      onClick={scrollToTop}
      style={{ transform: `rotate(${rotationAngle}deg)` }}
    />
  );
};

export default ScrollToTop;
