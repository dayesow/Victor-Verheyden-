import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./wipPage.scss";
import Marquee from "../marquee/Marquee";

const WipPage = () => {
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
      <b> Portrait of a writer, Rodrigo Costa Ribeiro </b> - Date, febr. 2022 -
      Model, Rodrigo Costa Ribeiro - Location, Brussels -
      <b> Portrait of a writer, Rodrigo Costa Ribeiro </b> - Date, febr. 2022 -
      Model, Rodrigo Costa Ribeiro - Location, Brussels -
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
      <a className="next-btn">Next - Portrait of an artist Jaoud Alloul</a>
    </div>
  );
};

export default WipPage;
