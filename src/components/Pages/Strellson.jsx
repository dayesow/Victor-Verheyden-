/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Marquee from "../marquee/Marquee";
import { useHandleNavigation } from "../pageTransition/PageTransition";
import "./strellson.scss";
import Lightbox from "../utilComponents/lightBox/Lightbox";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import { trackEvent } from "../../analytics";

const Strellson = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const imageRefs = useRef([]);
  const handleNavigation = useHandleNavigation();
  const t = (
    <>
      <b> Matthias Geerts & Morgan Lugo for Strellson </b> - Date, okt.2023 -
      Location, Brussels - <b> Matthias Geerts & Morgan Lugo for Strellson </b>-
      Date, okt.2023 - Location, Brussels -
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
      imgSrc: "/Strellson1.jpeg",
      className: "section2-img-st common-img-fade",
      alt: "Strellson_1",
      index: 1,
    },
    {
      imgSrc: "/Strellson2.jpeg",
      className: "section2-img-st common-img-fade",
      alt: "Strellson_2",
      index: 2,
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
      <div className="section2-st">
        <Marquee text={t} duration={40} />
        {renderImage(1)}
        {renderImage(2)}
        <a
          className="next-btn"
          onClick={() => {
            trackEvent({
              category: "Navigation",
              action: "Clicked Next Button",
              label: "Next - Iskander - Moon",
            });
            handleNavigation("/iskander-moon");
          }}
        >
          Next - Iskander - Moon
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

export default Strellson;
