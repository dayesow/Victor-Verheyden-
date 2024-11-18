import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./marquee.scss";

// eslint-disable-next-line react/prop-types
const Marquee = ({ text, duration }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    // Naadloze animatie zonder pauzes
    const totalWidth = marquee.scrollWidth; // De totale breedte van de marquee
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });

    // Clone de tekst om het effect van een naadloze loop te krijgen
    const cloneSpan = marquee.querySelector("span").cloneNode(true);
    marquee.appendChild(cloneSpan);

    tl.to(marquee, {
      x: -totalWidth / 2, // Verplaats de marquee naar links voor een naadloos effect
      duration: duration * 1.5,
    });

    return () => {
      tl.kill(); // Stop animatie bij unmount
    };
  }, [duration]);

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
