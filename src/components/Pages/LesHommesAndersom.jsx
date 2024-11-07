import "./lesHommesAndersom.scss";
import Marquee from "../marquee/Marquee";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import { useEffect, useRef, useState } from "react";
import { useHandleNavigation } from "../pageTransition/PageTransition";
import Lightbox from "../utilComponents/lightBox/Lightbox";

const LesHommesAndersom = () => {
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
      imgSrc: "Andersom1.jpeg",
      index: 1,
      className: "section1-img-l common-img-fade",
    },
    {
      imgSrc: "Andersom2.jpeg",
      index: 2,
      className: "section1-img-l common-img-fade",
    },
    {
      imgSrc: "Andersom3.jpeg",
      index: 3,
      className: "section1-img-l common-img-fade",
    },
    {
      imgSrc: "Andersom4.jpeg",
      index: 4,
      className: "section1-img-l common-img-fade",
    },
    {
      imgSrc: "Andersom5.jpeg",
      index: 5,
      className: "section1-img-l common-img-fade",
    },
    {
      imgSrc: "Andersom6.jpeg",
      index: 6,
      className: "section2-img-l common-img-fade",
    },
  ];

  const t = (
    <>
      <b> Performance, Les Hommes Andersom </b> - Date, sept. 2023 - Artists,
      Tars Vandebeek & Mathias Goethals - Location, Kortrijk -
      <b> Performance, Les Hommes Andersom </b> - Date, sept. 2023 - Artists,
      Tars Vandebeek & Mathias Goethals - Location, Kortrijk -
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
          loading="lazy"
          alt={`Performance Les Homme Andersom ${index}`}
          onClick={() => openLightbox(currImage.imgSrc, currImage.index)}
        />
      )
    );
  };

  return (
    <div className="container">
      <div className="section-l section1-l">
        <Marquee text={t} duration={40} />
        {renderImage(1)}
      </div>
      <div className="section-l section1-l">{renderImage(2)}</div>
      <div className="section-l section1-l">{renderImage(3)}</div>
      <div className="section-l section1-l">{renderImage(4)}</div>
      <div className="section-l section1-l">{renderImage(5)}</div>

      <div className="section-l section1-l">
        {renderImage(6)}
        <a
          className="next-btn"
          onClick={() => handleNavigation("/matthias-geerts-morgan-lugo")}
        >
          Next - Matthias geerts & Morgan Lugo
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

export default LesHommesAndersom;
