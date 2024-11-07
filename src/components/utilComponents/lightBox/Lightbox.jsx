import { useEffect, useRef, useState } from "react";
import "./lightbox.scss";

// eslint-disable-next-line react/prop-types
const Lightbox = ({ isOpen, image, onClose, onNext, onPrev }) => {
  const lightboxRef = useRef();
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (lightboxRef.current && lightboxRef.current === event.target) {
        setFadeOut(true); // Start fade-out effect
        setTimeout(onClose, 1500); // Call onClose after the fade-out effect
      }
    };

    if (isOpen) {
      setFadeIn(true); // Start fade-in effect when lightbox opens
      setFadeOut(false); // Reset fade-out state
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      setFadeIn(false); // Reset fade-in when lightbox closes
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null; // Ensure component doesn't render if not open and not fading out

  return (
    <div
      className={`lightbox active ${fadeOut ? "fade-out" : ""}`}
      onClick={onClose}
    >
      <div
        className="lightbox-content"
        ref={lightboxRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lightbox-container">
          <img
            src={image}
            alt="Current"
            className={`lightbox-image ${fadeIn ? "fade-in" : ""}`}
            onClick={onNext}
            loading="lazy"
          />
          <div className="lightbox-controls">
            <button className="prev-button" onClick={onPrev}>
              Previous
            </button>
            <button className="next-button" onClick={onNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
