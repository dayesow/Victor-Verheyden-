import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import "./wipPage.scss";
import Marquee from "../marquee/Marquee";
import { useHandleNavigation } from "../pageTransition/PageTransition";

const WipPage = () => {
  const handleNavigation = useHandleNavigation();
  const galleryRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = useMemo(
    () => [
      "/Andersom1.jpeg",
      "/IgorDieryck1.jpeg",
      "/Jaouad1.jpeg",
      "/Rodrigo1.jpeg",
      "/Strellson1.jpeg",
      "/Andersom2.jpeg",
      "/IgorDieryck2.jpeg",
      "/Jaouad2.jpeg",
      "/Andersom3.jpeg",
      "/Rodrigo2.jpeg",
      "/IgorDieryck8.jpeg",
    ],
    []
  );

  useEffect(() => {
    const gallery = galleryRef.current;
    const galleryItems = gallery.querySelectorAll(".marquee__item");

    if (galleryItems.length === 0) return;

    // Ensure images are fully loaded
    let loadedImages = 0;
    galleryItems.forEach((img) => {
      img.onload = () => {
        loadedImages += 1;
        if (loadedImages === galleryItems.length) {
          setImagesLoaded(true);
        }
      };
      // For already-cached images
      if (img.complete) {
        loadedImages += 1;
        if (loadedImages === galleryItems.length) {
          setImagesLoaded(true);
        }
      }
    });
  }, [images]);

  useEffect(() => {
    if (!imagesLoaded) return;

    const gallery = galleryRef.current;
    const galleryItems = gallery.querySelectorAll(".marquee__item");

    // Calculate the total width of all items in the gallery
    const totalWidth = Array.from(galleryItems).reduce(
      (width, item) => width + item.offsetWidth,
      0
    );

    // GSAP animation for infinite scroll
    gsap.fromTo(
      gallery,
      { x: 0 },
      {
        x: -totalWidth / 2,
        duration: galleryItems.length * 2, // Adjust speed here
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % totalWidth}px`,
        },
      }
    );
  }, [imagesLoaded]);

  const marqueeText = (
    <>
      <b> So Close Yet So Far From Paradise </b> - Work in progress - Unfolded
      during Covid, reflecting on emotions, freedom, and the endless search for
      paradise - <b> So Close Yet So Far From Paradise </b> - Work in progress -
      Unfolded during Covid, reflecting on emotions, freedom and the endless
      search for paradise -
    </>
  );

  return (
    <div className="wippage-section">
      <Marquee text={marqueeText} duration={40} />
      <div className="wrapper">
        <div className="gallery" ref={galleryRef}>
          {images.concat(images).map((image, index) => (
            <img
              className="marquee__item"
              key={index}
              src={image}
              alt={`Gallery Image ${index}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
      <a
        className="next-btn"
        onClick={() => handleNavigation("/portrait-of-an-artist-jaouad-alloul")}
      >
        Next - Portrait of an artist Jaoud Alloul
      </a>
    </div>
  );
};

export default WipPage;
