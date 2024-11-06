import { createContext, useContext, useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "./pageTransition.scss";

// Context aanmaken
const NavigationContext = createContext();

// eslint-disable-next-line react/prop-types
const PageTransition = ({ children }) => {
  const navigate = useNavigate();
  const transitionRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Binnenkomst animatie - geen transitie bij het laden van de pagina
    gsap.fromTo(
      transitionRef.current,
      { y: "0%" },
      { y: "100%", duration: 2, ease: "power2.inOut" }
    );
  }, []);

  const handleNavigation = (to) => {
    if (isExiting) return;
    setIsExiting(true);
    gsap.fromTo(
      transitionRef.current,
      { y: "100%" },
      {
        y: "0%",
        duration: 2,
        ease: "power2.inOut",
        onComplete: () => {
          navigate(to);
          window.scrollTo(0, 0);
          setTimeout(() => {
            gsap.fromTo(
              transitionRef.current,
              { y: "0%" },
              {
                y: "100%",
                duration: 2,
                ease: "power2.inOut",
                onComplete: () => {
                  setIsExiting(false);
                  return;
                },
              }
            );
          }, 100);
        },
      }
    );
  };
  // if (isExiting) return;
  return (
    <NavigationContext.Provider value={handleNavigation}>
      <div className="transition-bg" ref={transitionRef}></div>
      {children}
    </NavigationContext.Provider>
  );
};

export const useHandleNavigation = () => useContext(NavigationContext);

export default PageTransition;
