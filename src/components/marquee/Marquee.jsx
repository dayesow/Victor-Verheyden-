import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Marquee = ({ text, duration }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeWidth = marquee.offsetWidth;

    const animateMarquee = () => {
      gsap.fromTo(
        marquee,
        { x: 0 }, // Start buiten het scherm rechts
        {
          x: -marqueeWidth / 2, // Beweeg naar links buiten het scherm
          ease: "none",
          duration,
          repeat: -1, // Zorgt voor een continue herhaling
        }
      );
    };

    animateMarquee();

    return () => {
      gsap.killTweensOf(marquee);
    };
  }, [text]);

  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        position: "absolute",
        top: "5rem",
      }}
    >
      <div
        ref={marqueeRef}
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          fontSize: "12px",
          fontWeight: "400",
        }}
      >
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
