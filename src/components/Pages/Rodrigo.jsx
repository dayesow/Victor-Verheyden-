import Marquee from "../marquee/Marquee";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import "./rodrigo.scss";
import { useHandleNavigation } from "../pageTransition/PageTransition";
import { useEffect, useRef, useState } from "react";
import Lightbox from "../utilComponents/lightBox/Lightbox";

const Rodrigo = () => {
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
  const t = (
    <>
      <b> Portrait of a writer, Rodrigo Costa Ribeiro </b> - Date, febr. 2022 -
      Model, Rodrigo Costa Ribeiro - Location, Brussels -
      <b> Portrait of a writer, Rodrigo Costa Ribeiro </b> - Date, febr. 2022 -
      Model, Rodrigo Costa Ribeiro - Location, Brussels -
    </>
  );

  const images = [
    {
      imgSrc: "/Rodrigo1.jpeg",
      className: "section-img-1 common-img-fade",
      alt: "Rodrigo_1",
      index: 1,
      column1: true,
    },
    {
      imgSrc: "/Rodrigo2.jpeg",
      className: "section-img-2 common-img-fade",
      alt: "Rodrigo_2",
      index: 2,
      column1: true,
    },
    {
      imgSrc: "/Rodrigo3.jpeg",
      className: "section-img-3 common-img-fade",
      alt: "Rodrigo_3",
      index: 3,
      column1: true,
    },
    {
      imgSrc: "/Rodrigo4.jpeg",
      className: "section-img-4 common-img-fade",
      alt: "Rodrigo_4",
      index: 4,
      column1: true,
    },
    {
      imgSrc: "/Rodrigo5.jpeg",
      className: "section-img-5 common-img-fade",
      alt: "Rodrigo_5",
      index: 5,
      column2: true,
    },
    {
      imgSrc: "/Rodrigo6.jpeg",
      className: "section-img-6 common-img-fade",
      alt: "Rodrigo_6",
      index: 6,
      column2: true,
    },
    {
      imgSrc: "/Rodrigo7.jpeg",
      className: "section-img-7 common-img-fade",
      alt: "Rodrigo_7",
      index: 7,
      column2: true,
    },
  ];

  return (
    <div className="rodrigo-section">
      <Marquee text={t} duration={40} />
      <div className="rodrigo-columns">
        {/* Eerste kolom */}
        <div className="rodrigo-column-1">
          {images
            .filter((image) => image.column1)
            .map((image) => (
              <img
                ref={(el) => (imageRefs.current[image.index] = el)}
                key={image.index}
                src={image.imgSrc}
                className={image.className}
                alt={image.className}
                onClick={() => openLightbox(image.imgSrc, image.index)}
              />
            ))}
        </div>

        {/* Tweede kolom */}
        <div className="rodrigo-column-2">
          {images
            .filter((image) => image.column2)
            .map((image) => (
              <img
                ref={(el) => (imageRefs.current[image.index] = el)}
                key={image.index}
                src={image.imgSrc}
                className={image.className}
                alt={image.className}
                onClick={() => openLightbox(image.imgSrc, image.index)}
              />
            ))}
        </div>
      </div>
      <a className="next-btn" onClick={() => handleNavigation("/wip")}>
        Next - WIP
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
  );
};

export default Rodrigo;
