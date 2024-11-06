import ReactPlayer from "react-player";
import Marquee from "../marquee/Marquee";
import { useHandleNavigation } from "../pageTransition/PageTransition";
import "./photobook.scss";

const Photobook = () => {
  const handleNavigation = useHandleNavigation();
  const t = (
    <>
      <b> Portrait of an artist, Jaouad Alloul </b> - Date, sept. 2021 - Model,
      Jaouad Alloul - Assistance, Charlot Machiels-Didelez - Location, Brussels
      - <b>Portrait of an artist, Jaouad Alloul </b> - Date, sept. 2021 - Model,
      Jaouad Alloul - Assistance, Charlot Machiels-Didelez - Location, Brussels
      -
    </>
  );

  return (
    <div className="photobook-container">
      <Marquee text={t} duration={40} />

      <ReactPlayer
        url="https://www.youtube.com/watch?v=fHA1fw0jPSk"
        className="react-player"
        controls={true} // Hiermee toon je de YouTube-bedieningselementen (pauze, ondertiteling, etc.)
        config={{
          youtube: {
            playerVars: {
              cc_load_policy: 1, // Hiermee schakel je ondertiteling standaard in
              modestbranding: 1, // Verwijdert het YouTube-logo uit de bedieningsbalk
              rel: 0, // Hiermee voorkom je dat er gerelateerde video's worden getoond aan het einde
            },
          },
        }}
        width={"100%"}
        // height={240}
      />
      <p>
        This book is a collection of photos from the past years.
        &quot;Playtime&quot; symbolizes my playful way of working and the
        dominant presence of color in the photos. It is a personal thesis that
        brings shape to the image I made.
      </p>
      <a className="next-btn" onClick={() => handleNavigation("/wip")}>
        Next - Performance, Les Homme Andersom
      </a>
    </div>
  );
};
export default Photobook;
