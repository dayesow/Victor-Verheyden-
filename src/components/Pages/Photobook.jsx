import ReactPlayer from "react-player";
import Marquee from "../marquee/Marquee";
import { useHandleNavigation } from "../pageTransition/PageTransition";
import "./photobook.scss";

const Photobook = () => {
  const handleNavigation = useHandleNavigation();
  const t = (
    <>
      <b> Photobook Playtime</b> - realized sept. 2020 - Edition of 20 books -
      90 pages - 45 x 45 cm - <b> Photobook Playtime</b> - realized sept. 2020 -
      Edition of 20 books - 90 pages - 45 x 45 cm - <b> Photobook Playtime</b> -
      realized sept. 2020 - Edition of 20 books - 90 pages - 45 x 45 cm -
    </>
  );

  return (
    <div className="photobook-container">
      <Marquee text={t} duration={40} />
      <div className="react-player-wrapper">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=0CHg6TalcBY"
          className="react-player"
          controls={true}
          config={{
            youtube: {
              playerVars: {
                cc_load_policy: 1,
                modestbranding: 1,
                rel: 0,
              },
            },
          }}
          width="100%"
          height="100%"
        />
      </div>

      <p>
        This book is a collection of photos from the past years.
        &quot;Playtime&quot; symbolizes my playful way of working and the
        dominant presence of color in the photos. It is a personal thesis that
        brings shape to the image I made.
      </p>
      <a
        className="next-btn"
        onClick={() => handleNavigation("/performance-les-hommes-andersom")}
      >
        Next - Performance, Les Homme Andersom
      </a>
    </div>
  );
};
export default Photobook;
