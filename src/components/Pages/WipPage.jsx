import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./wipPage.scss";
import Marquee from "../marquee/Marquee";
import { useHandleNavigation } from "../pageTransition/PageTransition";

// Je 'horizontalLoop' functie blijft dezelfde
function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // enkele browser shifts worden gecorrigeerd
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;
  gsap.set(items, {
    // Zet x naar xPercent om het responsief te maken en vul arrays
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });
  gsap.set(items, { x: 0 });
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); // altijd de kortste richting kiezen
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      // indien de tijdslijn wordt gewikkeld, maak de juiste aanpassingen
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render voor betere prestaties
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}

const WipPage = () => {
  const handleNavigation = useHandleNavigation();
  const galleryRef = useRef(null);
  const animationRef = useRef(null); // Create a ref to hold the animation

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
    const galleryItems = galleryRef.current.querySelectorAll(".marquee__item");

    // Start the animation and store the reference
    animationRef.current = horizontalLoop(galleryItems, {
      repeat: -1,
      speed: 1, // Adjust speed if needed
    });

    // Cleanup function to stop the animation when the component is unmounted or handleNavigation changes
    return () => {
      if (animationRef.current) {
        animationRef.current.kill(); // Stop the GSAP animation
      }
    };
  }, [handleNavigation, animationRef]); // Depend on `handleNavigation` to reset animation if necessary

  const t = (
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
      <Marquee text={t} duration={40} />
      <div className="gallery" ref={galleryRef}>
        {images.concat(images).map((image, index) => (
          <img
            className="marquee__item" // Add this class for the loop
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
