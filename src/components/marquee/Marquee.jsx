import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./marquee.scss"; // Import the SCSS file

// eslint-disable-next-line react/prop-types
const Marquee = ({ text, duration }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeWidth = marquee.offsetWidth;

    const animateMarquee = () => {
      gsap.fromTo(
        marquee,
        { x: 0 },
        {
          x: -marqueeWidth / 2,
          ease: "none",
          duration,
          repeat: -1,
        }
      );
    };

    animateMarquee();

    return () => {
      gsap.killTweensOf(marquee);
    };
  }, []);

  return (
    <div className="marquee-container">
      <div ref={marqueeRef} className="marquee-text">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
