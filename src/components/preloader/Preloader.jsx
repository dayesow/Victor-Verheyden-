import { useEffect, useRef } from "react";
import "./preloader.scss";
import { gsap } from "gsap";
import SplitType from "split-type";

// eslint-disable-next-line react/prop-types
const Preloader = ({ onFinish }) => {
  const transitionRef = useRef();
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    textElement.textContent = "Victor Verheyden";
    const splitText = new SplitType(textElement, { type: "chars" });

    // Timeline for animations
    const tl = gsap.timeline({
      onComplete: onFinish, // call onFinish after animations complete
    });

    // Step 1: Slide in the preloader from top to bottom
    tl.fromTo(
      transitionRef.current,
      { y: "-100%" },
      { y: "0%", duration: 2, ease: "power2.inOut" }
    );

    // Step 2: Type out "Victor Verheyden"
    tl.from(
      splitText.chars,
      {
        opacity: 0,
        // y: 20,
        duration: 1,
        stagger: 0.01,
        ease: "power2.in",
      },
      "+=0.5" // Wait 0.5s after slide-in before typing starts
    );

    // Step 3: Slide out the preloader from bottom to top
    tl.to(transitionRef.current, {
      y: "-100%",
      duration: 2,
      ease: "power2.inOut",
      delay: 1, // Keep the text visible for 1 second before sliding out
    });
  }, [onFinish]);

  return (
    <div className="preloader" ref={transitionRef}>
      <p ref={textRef}></p>
    </div>
  );
};

export default Preloader;
