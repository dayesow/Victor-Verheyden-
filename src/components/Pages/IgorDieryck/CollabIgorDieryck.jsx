import React, { useState } from "react";
import Marquee from "../../marquee/Marquee";
import "./collabIgorDieryck.scss";

const CollabIgorDieryck = () => {
  const images = [
    {
      img1: "http://victorverheyden.com/wp-content/uploads/2023/11/print-look-min-scaled.jpg",
      img2: "http://victorverheyden.com/wp-content/uploads/2023/11/MG_2537-min-scaled.jpg",
      index1: 1,
      index2: 2,
    },
    {
      img1: "http://victorverheyden.com/wp-content/uploads/2023/11/MG_2367-min-scaled.jpg",
      img2: "http://victorverheyden.com/wp-content/uploads/2023/11/MG_2609-min-scaled.jpg",
      index1: 3,
      index2: 4,
    },
    {
      img1: "http://victorverheyden.com/wp-content/uploads/2023/11/MG_2582-min-scaled.jpg",
      img2: "http://victorverheyden.com/wp-content/uploads/2023/11/MG_2514-scaled.jpg",
      index1: 5,
      index2: 6,
    },
    {
      img1: "http://victorverheyden.com/wp-content/uploads/2023/11/print-look3-min.jpg",
      img2: "http://victorverheyden.com/wp-content/uploads/2023/11/print-look2-scaled.jpg",
      index1: 7,
      index2: 8,
    },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (image, index) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
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
      <b>Collaboration w. Igor Dieryck</b> - Date, sept. 2022 - Model, Arne
      Meynaerts - Assistance, Victor Depraetere - Location, Brussels -
      <b> Collaboration w. Igor Dieryck</b> - Date, sept. 2022 - Model, Arne
      Meynaerts - Assistance, Victor Depraetere - Location, Brussels -
    </>
  );

  return (
    <div className="collab-container">
      <Marquee text={t} duration={40} />
      {images.map((src, index) => (
        <div key={index} className="image-pair">
          <img
            key={src.index1}
            src={src.img1}
            alt={`Image ${src.index1}`}
            className="collab-image"
            onClick={() => openLightbox(src.img1, src.index1 - 1)}
          />
          <img
            key={src.index2}
            src={src.img2}
            alt={`Image ${src.index2}`}
            className="collab-image"
            onClick={() => openLightbox(src.img2, src.index2 - 1)}
          />
        </div>
      ))}

      {lightboxOpen && (
        <div className={`lightbox ${lightboxOpen ? "active" : ""}`}>
          <div className="lightbox-content">
            <img src={currentImage} alt="Current" className="lightbox-image" />
            <a className="close-button" onClick={closeLightbox}>
              x
            </a>
            <div className="lightbox-controls">
              <button className="prev-button" onClick={prevImage}>
                Previous
              </button>
              <button className="next-button" onClick={nextImage}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollabIgorDieryck;
