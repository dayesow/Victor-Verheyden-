import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import "./wipPage.scss";
import Marquee from "../marquee/Marquee";
import { useHandleNavigation } from "../pageTransition/PageTransition";

const WipPage = () => {
  const handleNavigation = useHandleNavigation();
  const galleryRef = useRef(null);

  const images = useMemo(
    () => [
      "https://victorverheyden.com/wp-content/uploads/2023/11/IgorDieryck-1-Medium.jpeg",
      "https://victorverheyden.com/wp-content/uploads/2023/11/Rodrigo-1-Medium.jpeg",
      "https://victorverheyden.com/wp-content/uploads/2023/11/wip-Medium.jpeg",
      "https://victorverheyden.com/wp-content/uploads/2023/11/jaouad-1-Medium.jpeg",
      "https://victorverheyden.com/wp-content/uploads/2023/11/photobook-1-Medium.jpeg",
      "https://victorverheyden.com/wp-content/uploads/2023/11/MG_9917-min-scaled.jpg",
      "https://victorverheyden.com/wp-content/uploads/2023/11/MG_8465finaal2-min-scaled.jpg",
      // "https://victorverheyden.com/wp-content/uploads/2023/11/MG_7778reversed-bnw-min-scaled.jpg",
    ],
    []
  );

  useEffect(() => {
    const galleryItems = galleryRef.current.querySelectorAll(".marquee__item");
    if (galleryItems.length === 0) return;

    const itemWidth = galleryItems[0].offsetWidth;
    const totalWidth = itemWidth * galleryItems.length;

    gsap.to(galleryRef.current, {
      x: `-=${totalWidth / 2}px`, // verschuif de galerie naar links
      duration: galleryItems.length * 1.5, // snelheid aanpassen op basis van aantal afbeeldingen
      ease: "linear",
      repeat: -1, // oneindige loop
      modifiers: {
        x: (x) => `${parseFloat(x) % (totalWidth / 2)}px`, // naadloze loop
      },
    });
  }, [images, galleryRef]);

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
