import { useEffect, useRef, useState } from "react";
import Marquee from "../marquee/Marquee";
import { useHandleNavigation } from "../pageTransition/PageTransition";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import "./jaouadAlloul.scss";
import Lightbox from "../utilComponents/lightBox/Lightbox";

const JaouadAlloul = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const imageRefs = useRef([]);
  const handleNavigation = useHandleNavigation();
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

  const images = [
    {
      imgSrc: "/Jaouad1.jpeg",
      index: 1,
      className: "section1-img-j common-img-fade",
    },
    {
      imgSrc: "/Jaouad2.jpeg",
      index: 2,
      className: "section2-img-j common-img-fade",
    },
    {
      imgSrc: "/Jaouad3.jpeg",
      index: 3,
      className: "section2-img-j common-img-fade",
    },
    {
      imgSrc: "/Jaouad4.jpeg",
      index: 4,
      className: "section1-img-j common-img-fade",
    },
    {
      imgSrc: "/Jaouad5.jpeg",
      index: 5,
      className: "section2-img-j common-img-fade",
    },
    {
      imgSrc: "/Jaouad6.jpeg",
      index: 6,
      className: "section2-img-j common-img-fade",
    },
    {
      imgSrc: "/Jaouad7.jpeg",
      index: 7,
      className: "section1-img-j common-img-fade",
    },
  ];
  const t = (
    <>
      <b> Portrait of an artist, Jaouad Alloul </b> - Date, sept. 2021 - Model,
      Jaouad Alloul - Assistance, Charlot Machiels-Didelez - Location, Brussels
      - <b>Portrait of an artist, Jaouad Alloul </b> - Date, sept. 2021 - Model,
      Jaouad Alloul - Assistance, Charlot Machiels-Didelez - Location, Brussels
      -
    </>
  );

  const renderImage = (index) => {
    const currImage = images.find((i) => i.index === index);
    return (
      currImage && (
        <img
          ref={(el) => (imageRefs.current[index] = el)}
          src={currImage.imgSrc}
          className={currImage.className}
          alt={`JaouadAlloul ${index}`}
          loading="lazy"
          onClick={() => openLightbox(currImage.imgSrc, currImage.index)}
        />
      )
    );
  };

  return (
    <div className="container-j">
      <div className="section-j section1-j">
        <Marquee text={t} duration={40} />
        {renderImage(1)}
      </div>
      <div className="section-j section2-j">
        {renderImage(2)}
        {renderImage(3)}
      </div>
      <div className="section-j section1-j">{renderImage(4)}</div>
      <div className="section-j section2-j">
        {renderImage(5)}
        {renderImage(6)}
      </div>
      <div className="section-j section1-j">
        {renderImage(7)}
        <a
          className="next-btn"
          onClick={() => handleNavigation("/playtime-photobook")}
        >
          Next - Playtime Photobook
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

export default JaouadAlloul;
