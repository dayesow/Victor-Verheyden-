import { useEffect, useRef } from "react";
// import gsap from "gsap";
import { useHandleNavigation } from "../pageTransition/PageTransition";
import "./home.scss";

// eslint-disable-next-line react/prop-types
const Home = ({ toggleMenu }) => {
  const containerRef = useRef(null);
  const handleNavigation = useHandleNavigation();

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    const cursorElement = document.querySelector(".app-cursor");

    if (!isDesktop && cursorElement) {
      cursorElement.style.display = "none"; // Hide cursor on mobile
      return;
    }

    const handleMouseMove = (e) => {
      if (e.target.classList.contains("dot")) {
        const target = e.target.nextElementSibling;

        if (!target.classList.contains("visible")) {
          target.classList.add("visible");
        } else {
          const offset = target.parentElement.getBoundingClientRect();
          const tipDist = 15;
          target.style.top = `${e.clientY - offset.top + tipDist}px`;
          target.style.left = `${e.clientX - offset.left + tipDist}px`;
        }
        if (cursorElement) cursorElement.style.display = "none";
      } else {
        const content = document.getElementsByClassName("content");
        for (let i = 0; i < content.length; i++) {
          content[i].classList.remove("visible");
        }
        if (cursorElement) cursorElement.style.display = "block";
      }
    };

    if (isDesktop) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (isDesktop) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      if (cursorElement) cursorElement.style.display = "block";
    };
  }, []);

  return (
    <>
      <div className="tooltip-main-container">
        <div className="tooltips-container" ref={containerRef}>
          {[
            {
              href: "/collaboration-with-igordieryck",
              imgSrc: "/HomeIgorDieryck.jpeg",
              alt: "Collab Igor Dieryck",
              title: "Collab - Igor Dieryck",
            },
            {
              href: "/portrait-of-a-writer-rodrigo-costa-ribeiro",
              imgSrc: "/HomeRodrigo.jpeg",
              alt: "Rodrigo Costa Ribeiro",
              title: "Portrait of a writer Rodrigo Costa Ribeiro",
            },
            {
              href: "/wip",
              imgSrc: "/HomeWip.jpeg",
              alt: "So Close Yet So Far From Paradise",
              title: "Work in progress - So Close Yet So Far - From Paradise",
            },
            {
              href: "/portrait-of-an-artist-jaouad-alloul",
              imgSrc: "/HomeJaouad.jpeg",
              alt: "Jaouad Alloul",
              title: "Portrait of an artist Jaouad Alloul",
            },
            {
              href: "/playtime-photobook",
              imgSrc: "/HomePhotobook.jpeg",
              alt: "Playtime Photobook",
              title: "Playtime Photobook",
            },
          ].map(({ href, imgSrc, alt, title }, index) => (
            <a
              onClick={() => handleNavigation(href)} // Gebruik hier handleNavigation
              className="tooltip"
              key={index}
            >
              <div>
                <img src={imgSrc} alt={alt} className="dot" />
                <div className="content">
                  <h1>{title}</h1>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="tooltip-footer">
          <a onClick={toggleMenu} className="btn">
            See more
          </a>
          <a onClick={() => handleNavigation("/info")}>Info</a>
        </div>
      </div>
    </>
  );
};

export default Home;
