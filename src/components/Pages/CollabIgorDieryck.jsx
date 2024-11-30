import { useState, useRef, useEffect } from "react";
import Marquee from "../marquee/Marquee";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import { useHandleNavigation } from "../pageTransition/PageTransition";
import "./collabIgorDieryck.scss";
import Lightbox from "../utilComponents/lightBox/Lightbox";
import { trackEvent } from "../../analytics";

const CollabIgorDieryck = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const imageRefs = useRef([]);

  const images = [
    {
      img1: "/IgorDieryck1.jpeg",
      img2: "/IgorDieryck2.jpeg",
      index1: 1,
      index2: 2,
    },
    {
      img1: "/IgorDieryck3.jpeg",
      img2: "/IgorDieryck4.jpeg",
      index1: 3,
      index2: 4,
    },
    {
      img1: "/IgorDieryck8.jpeg",
      img2: "/IgorDieryck6.jpeg",
      index1: 5,
      index2: 6,
    },
    {
      img1: "/IgorDieryck7.jpeg",
      img2: "/IgorDieryck5.jpeg",
      index1: 7,
      index2: 8,
    },
  ];

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

  const handleNavigation = useHandleNavigation();

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
    const nextIndex = (currentIndex + 1) % (images.length * 2);
    const imagePair = images[Math.floor(nextIndex / 2)];
    setCurrentImage(nextIndex % 2 === 0 ? imagePair.img1 : imagePair.img2);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex =
      (currentIndex - 1 + images.length * 2) % (images.length * 2);
    const imagePair = images[Math.floor(prevIndex / 2)];
    setCurrentImage(prevIndex % 2 === 0 ? imagePair.img1 : imagePair.img2);
    setCurrentIndex(prevIndex);
  };

  const t = (
    <>
      <b> Collaboration w. Igor Dieryck</b> - Date, sept. 2022 - Model, Arne
      Meynaerts - Assistance, Victor Depraetere - Location, Brussels -
      <b> Collaboration w. Igor Dieryck</b> - Date, sept. 2022 - Model, Arne
      Meynaerts - Assistance, Victor Depraetere - Location, Brussels -
    </>
  );

  return (
    <div>
      <div className="collab-container">
        <Marquee text={t} duration={40} />
        {images.map((src, index) => (
          <div key={index} className="image-pair">
            <img
              ref={(el) => (imageRefs.current[src.index1] = el)}
              src={src.img1}
              alt={`Image ${src.index1}`}
              className="collab-image"
              loading="lazy"
              onClick={() => openLightbox(src.img1, src.index1 - 1)}
            />
            <img
              ref={(el) => (imageRefs.current[src.index2] = el)}
              src={src.img2}
              alt={`Image ${src.index2}`}
              className="collab-image"
              loading="lazy"
              onClick={() => openLightbox(src.img2, src.index2 - 1)}
            />
          </div>
        ))}
        <a
          className="next-btn"
          onClick={() => {
            trackEvent({
              category: "Navigation",
              action: "Clicked Next Button",
              label: "Next - Portrait of an artist Rodrigo",
            });
            handleNavigation("/portrait-of-a-writer-rodrigo-costa-ribeiro");
          }}
        >
          Next - Portrait of an artist Rodrigo
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

export default CollabIgorDieryck;
