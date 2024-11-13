import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./marquee.scss";

// eslint-disable-next-line react/prop-types
const Marquee = ({ text, duration }) => {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const container = containerRef.current;
    const marqueeWidth = marquee.offsetWidth;
    const containerWidth = container.offsetWidth;

    // Bereken de tijdsduur gebaseerd op de snelheid (in pixels per seconde)
    const calculatedDuration = (marqueeWidth + containerWidth) / duration;

    const animateMarquee = () => {
      gsap.fromTo(
        marquee,
        { x: 0 },
        {
          x: -marqueeWidth,
          ease: "none",
          duration: calculatedDuration,
          repeat: -1,
        }
      );
    };

    animateMarquee();

    return () => {
      gsap.killTweensOf(marquee);
    };
  }, [duration]);

  return (
    <div ref={containerRef} className="marquee-container">
      <div ref={marqueeRef} className="marquee-text">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
