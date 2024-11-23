/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Marquee from "../marquee/Marquee";
import { useHandleNavigation } from "../pageTransition/PageTransition";

import Lightbox from "../utilComponents/lightBox/Lightbox";
import ScrollToTop from "../scrollToTop/ScrollToTop";

import "./iskander.scss";

const Iskander = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const imageRefs = useRef([]);
  const handleNavigation = useHandleNavigation();
  const t = (
    <>
      <b> Portrait of an artist, Iskander Moon </b> - Date, Jul. 2024 -
      Location, Antwerp - <b> Portrait of an artist, Iskander Moon </b> - Date,
      Jul. 2024 - Location, Antwerp -
    </>
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    imageRefs.current.forEach((imgRef) => {
      if (imgRef) {
        observer.observe(imgRef);
      }
    });

    return () => {
      imageRefs.current.forEach((imgRef) => {
        if (imgRef) {
          observer.unobserve(imgRef);
        }
      });
    };
  }, []);

  const images = [
    {
      imgSrc: "/iskander1.jpeg",
      className: "section2-img-is common-img-fade",
      alt: "Iskander",
      index: 1,
    },
    {
      imgSrc: "/iskander2.jpeg",
      className: "section2-img-is common-img-fade",
      alt: "Iskander",
      index: 2,
    },
    {
      imgSrc: "/iskander3.jpeg",
      className: "section2-img-is common-img-fade",
      alt: "Iskander",
      index: 3,
    },
  ];

  const openLightbox = (image, index) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // Force a reflow to trigger fade-in effect again
    setTimeout(() => {
      imageRefs.current.forEach((imgRef) => {
        if (imgRef) {
          imgRef.classList.remove("fade-in");
          imgRef.offsetHeight; // Trigger reflow
          imgRef.classList.add("fade-in");
        }
      });
    }, 100); // Delay to allow the lightbox to close
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex].imgSrc);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex].imgSrc);
    setCurrentIndex(prevIndex);
  };

  const renderImage = (index) => {
    const currImage = images.find((i) => i.index === index);
    return (
      currImage && (
        <img
          ref={(el) => (imageRefs.current[index] = el)}
          src={currImage.imgSrc}
          className={currImage.className}
          alt={currImage.alt}
          loading="lazy"
          onClick={() => openLightbox(currImage.imgSrc, currImage.index)}
        />
      )
    );
  };

  return (
    <div>
      <div className="section2-is">
        <Marquee text={t} duration={40} />
        {renderImage(1)}
        {renderImage(2)}
        {renderImage(3)}
        <a
          className="next-btn"
          onClick={() => handleNavigation("/collaboration-with-igordieryck")}
        >
          Next - Collaboration w. Igor Dieryck
        </a>
        <ScrollToTop />
        <Lightbox
          isOpen={lightboxOpen}
          image={currentImage}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      </div>
    </div>
  );
};

export default Iskander;
