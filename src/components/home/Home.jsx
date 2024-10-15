import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useHandleNavigation } from "../pageTransition/PageTransition";
import "./home.scss";
import Header from "../header/Header";

const Home = () => {
  const containerRef = useRef(null);
  const handleNavigation = useHandleNavigation(); // Gebruik de navigatiecontext

  useEffect(() => {
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
        document.querySelector(".app-cursor").style.display = "none";
      } else {
        const content = document.getElementsByClassName("content");
        for (let i = 0; i < content.length; i++) {
          content[i].classList.remove("visible");
        }
        document.querySelector(".app-cursor").style.display = "block";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="tooltip-main-container">
        <div className="tooltips-container" ref={containerRef}>
          {[
            {
              href: "/collab-igor-dieryck",
              imgSrc:
                "https://victorverheyden.com/wp-content/uploads/2023/11/IgorDieryck-1-Medium.jpeg",
              alt: "Collab Igor Dieryck",
              title: "Collab - Igor Dieryck",
            },
            {
              href: "/rodrigo",
              imgSrc:
                "https://victorverheyden.com/wp-content/uploads/2023/11/Rodrigo-1-Medium.jpeg",
              alt: "Rodrigo Costa Ribeiro",
              title: "Portrait of a writer Rodrigo Costa Ribeiro",
            },
            {
              href: "/wip",
              imgSrc:
                "https://victorverheyden.com/wp-content/uploads/2023/11/wip-Medium.jpeg",
              alt: "So Close Yet So Far From Paradise",
              title: "Work in progress - So Close Yet So Far - From Paradise",
            },
            {
              href: "/portrait-of-an-artist-jaouad-alloul",
              imgSrc:
                "https://victorverheyden.com/wp-content/uploads/2023/11/jaouad-1-Medium.jpeg",
              alt: "Jaouad Alloul",
              title: "Portrait of an artist Jaouad Alloul",
            },
            {
              href: "https://victorverheyden.com/photobook-playtime/",
              imgSrc:
                "https://victorverheyden.com/wp-content/uploads/2023/11/photobook-1-Medium.jpeg",
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
          <a
            href="https://victorverheyden.com/wp-content/uploads/2023/11/photobook-1-Medium.jpeg"
            className="btn"
          >
            See more
          </a>
          <a>Info</a>
        </div>
      </div>
    </>
  );
};

export default Home;
