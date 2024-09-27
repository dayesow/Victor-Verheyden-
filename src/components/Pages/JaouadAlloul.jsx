import { useEffect, useRef } from "react";
import Marquee from "../marquee/Marquee";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import "./jaouadAlloul.scss";

const JaouadAlloul = () => {
  const containerRef = useRef(null); // Ref naar de container om secties te tracken

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
      <b> Portrait of an artist, Jaouad Alloul </b> - Date, sept. 2021 - Model,
      Jaouad Alloul - Assistance, Charlot Machiels-Didelez - Location, Brussels
      - <b>Portrait of an artist, Jaouad Alloul </b> - Date, sept. 2021 - Model,
      Jaouad Alloul - Assistance, Charlot Machiels-Didelez - Location, Brussels
      -
    </>
  );

  return (
    <div ref={containerRef} className="container">
      <div className="section section1">
        <Marquee text={t} duration={40} />
        <img
          src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_9963-min-2048x1536.jpg"
          className="section1-img"
        />
      </div>
      <div className="section section2">
        <img
          src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_0064-min-scaled.jpg"
          className="section2-img"
        />
        <img
          src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_9990-min-scaled.jpg"
          className="section2-img"
        />
      </div>
      <div className="section section1">
        <img
          src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_9917-min-2048x1365.jpg"
          className="section1-img"
        />
      </div>
      <div className="section section2">
        <img
          src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_9960-min-768x1024.jpg"
          className="section2-img"
        />
        <img
          src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_9892-min-scaled.jpg"
          className="section2-img"
        />
      </div>
      <div className="section section1">
        <img
          src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_98682-min-2048x1638.jpg"
          className="section1-img"
        />
        <a className="next-btn"> Next - Portrait of an artist Rodrigo</a>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default JaouadAlloul;
