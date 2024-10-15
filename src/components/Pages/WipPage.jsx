import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./wipPage.scss";
import Marquee from "../marquee/Marquee";
import { useHandleNavigation } from "../pageTransition/PageTransition";

const WipPage = () => {
  const handleNavigation = useHandleNavigation();
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
  const galleryRef = useRef(null);
  useEffect(() => {
    const gallery = galleryRef.current;
    const galleryeWidth = gallery.offsetWidth;
    gsap.fromTo(
      gallery,
      {
        x: 0,
      },
      {
        xPercent: -galleryeWidth / 2,
        duration: 10000,
        repeat: -1,
        ease: "linear",
      }
    );

    return () => {
      gsap.killTweensOf(gallery);
    };
  }, []);

  const t = (
    <>
      <b> So Close Yet So Far From Paradise </b> - Work in progress - Unfolded
      during Covid, reflecting on emotions, freedom and the endless search for
      paradise -<b> So Close Yet So Far From Paradise </b> - Work in progress -
      Unfolded during Covid, reflecting on emotions, freedom and the endless
      search for paradise -
    </>
  );

  return (
    <div className="wippage-section">
      <Marquee text={t} duration={40} />
      <div className="gallery" ref={galleryRef}>
        {images.concat(images).map((image, index) => (
          <img key={index} src={`${image}`} alt={`Gallery Image ${index}`} />
        ))}
        {images.concat(images).map((image, index) => (
          <img key={index} src={`${image}`} alt={`Gallery Image ${index}`} />
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
