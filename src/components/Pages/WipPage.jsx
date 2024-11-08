import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./wipPage.scss";
import Marquee from "../marquee/Marquee";
import { useHandleNavigation } from "../pageTransition/PageTransition";

const WipPage = () => {
  const handleNavigation = useHandleNavigation();
  const galleryRef = useRef(null);

  const images = [
    "https://victorverheyden.com/wp-content/uploads/2023/11/IgorDieryck-1-Medium.jpeg",
    "https://victorverheyden.com/wp-content/uploads/2023/11/Rodrigo-1-Medium.jpeg",
    "https://victorverheyden.com/wp-content/uploads/2023/11/wip-Medium.jpeg",
    "https://victorverheyden.com/wp-content/uploads/2023/11/jaouad-1-Medium.jpeg",
    "https://victorverheyden.com/wp-content/uploads/2023/11/photobook-1-Medium.jpeg",
    "https://victorverheyden.com/wp-content/uploads/2023/11/MG_9917-min-scaled.jpg",
    "https://victorverheyden.com/wp-content/uploads/2023/11/MG_8465finaal2-min-scaled.jpg",
    "https://victorverheyden.com/wp-content/uploads/2023/11/MG_7778reversed-bnw-min-scaled.jpg",
  ];

  useEffect(() => {
    // Wait until images are loaded and gallery is rendered
    const galleryItems = galleryRef.current.querySelectorAll(".marquee__item");
    if (galleryItems.length === 0) return;

    const numImages = galleryItems.length;
    const totalWidth = galleryItems[0].offsetWidth * numImages;

    // Define infinite scroll animation with GSAP
    gsap.to(galleryRef.current, {
      x: `-=${totalWidth}px`, // Move the gallery to the left
      duration: numImages * 5, // Adjusts speed based on the number of images
      ease: "linear",
      repeat: -1, // Infinite loop
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`, // Ensures the loop is seamless
      },
    });
  }, [images, galleryRef]);

  const marqueeText = (
    <>
      <b> So Close Yet So Far From Paradise </b> - Work in progress - Unfolded
      during Covid, reflecting on emotions, freedom, and the endless search for
      paradise -<b> So Close Yet So Far From Paradise </b> - Work in progress -
      Unfolded during Covid, reflecting on emotions, freedom and the endless
      search for paradise -
    </>
  );

  return (
    <div className="wippage-section">
      <Marquee text={marqueeText} duration={40} />
      <div className="gallery" ref={galleryRef}>
        {/* Map the images twice to create a seamless loop */}
        {images
          .concat(images)

          .map((image, index) => (
            <img
              className="marquee__item"
              key={index}
              src={image}
              alt={`Gallery Image ${index}`}
              loading="lazy"
            />
          ))}
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
