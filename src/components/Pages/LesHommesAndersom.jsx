import "./lesHommesAndersom.scss";
import Marquee from "../marquee/Marquee";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import { useRef } from "react";
import { useHandleNavigation } from "../pageTransition/PageTransition";

const LesHommesAndersom = () => {
  const containerRef = useRef(null); // Ref naar de container om secties te tracken
  const handleNavigation = useHandleNavigation();

  //   useEffect(() => {
  //     const handleScroll = (e) => {
  //       e.preventDefault(); // Voorkomt standaard scrollgedrag
  //       const delta = e.deltaY;
  //       const sections = Array.from(document.querySelectorAll(".section"));
  //       const currentSection = sections.find((section) => {
  //         const rect = section.getBoundingClientRect();
  //         return rect.top >= 0 && rect.top <= window.innerHeight / 2;
  //       });

  //       const currentIndex = sections.indexOf(currentSection);

  //       if (delta > 0 && currentIndex < sections.length - 1) {
  //         // Scroll naar volgende sectie
  //         sections[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
  //       } else if (delta < 0 && currentIndex > 0) {
  //         // Scroll naar vorige sectie
  //         sections[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
  //       }
  //     };

  //     // Voeg de event listener toe aan de ref van de container
  //     const container = containerRef.current;
  //     if (container) {
  //       container.addEventListener("wheel", handleScroll, { passive: false });
  //     }

  //     // Cleanup om de event listener te verwijderen bij demontage
  //     return () => {
  //       if (container) {
  //         container.removeEventListener("wheel", handleScroll);
  //       }
  //     };
  //   }, []);

  const t = (
    <>
      <b> Performance, Les Hommes Andersom </b> - Date, sept. 2023 - Artists,
      Tars Vandebeek & Mathias Goethals - Location, Kortrijk -
      <b> Performance, Les Hommes Andersom </b> - Date, sept. 2023 - Artists,
      Tars Vandebeek & Mathias Goethals - Location, Kortrijk -
    </>
  );

  return (
    <div ref={containerRef} className="container">
      <div className="section section1">
        <Marquee text={t} duration={40} />
        <img
          src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_8414-4-improved-final-kopie-min-scaled.jpg"
          className="section1-img"
        />
      </div>
      <div className="section section1">
        <img
          src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_8465finaal2-min-scaled.jpg"
          className="section1-img"
        />
      </div>
      <div className="section section1">
        <img
          src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_8018afg-min-1-scaled.jpg"
          className="section1-img"
        />
      </div>
      <div className="section section1">
        <img
          src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_7778reversed-bnw-min-scaled.jpg"
          className="section1-img"
        />
      </div>
      <div className="section section1">
        <img
          src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_7937-3-glow-min-scaled.jpg"
          className="section1-img"
        />
      </div>

      <div className="section section1">
        <img
          src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_7723-2-min-scaled.jpg"
          className="section1-img"
        />
        <a
          className="next-btn"
          onClick={() => handleNavigation("/matthias-geerts-morgan-lugo")}
        >
          Next - Matthias geerts & Morgan Lugo{" "}
        </a>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default LesHommesAndersom;
