import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./pageTransition.scss";

const PageTransition = () => {
  const [isPageLeaving, setIsPageLeaving] = useState(false);
  const [isPageEntering, setIsPageEntering] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // When route changes, reset entering state to true
    setIsPageEntering(true);

    // Trigger transition effect after loading completes
    setTimeout(() => {
      setIsPageEntering(false);
    }, 1000); // Duration should match the CSS transition time (1s)
  }, [location]);

  const handleNavigation = (path) => {
    // Trigger leaving transition (bottom to top)
    setIsPageLeaving(true);

    // Wait for the animation to finish, then navigate
    setTimeout(() => {
      navigate(path);
    }, 1000); // Duration should match the CSS transition time (1s)
  };

  return (
    <>
      {/* The page transition overlay */}
      <div
        className={`page-transition-cover ${
          isPageLeaving ? "page-leaving" : ""
        } ${isPageEntering ? "page-entering" : ""}`}
      ></div>

      {/* Example navigation with transition */}
      <button onClick={() => handleNavigation("/collab-igor-dieryck")}>
        Go to Collab Igor Dieryck
      </button>
    </>
  );
};

export default PageTransition;
