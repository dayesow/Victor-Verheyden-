import Marquee from "../marquee/Marquee";
import { useHandleNavigation } from "../pageTransition/PageTransition";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import "./strellson.scss";

const Strellson = () => {
  const handleNavigation = useHandleNavigation();
  const t = (
    <>
      <b>Matthias Geerts & Morgan Lugo for Strellson </b> - Date, okt.2023 -
      Location, Brussels - <b> Matthias Geerts & Morgan Lugo for Strellson </b>-
      Date, okt.2023 - Location, Brussels -
    </>
  );
  return (
    <div className="section2">
      <Marquee text={t} duration={40} />
      <img
        src="https://victorverheyden.com/wp-content/uploads/2024/03/MG_9266-2-scaled.jpg"
        className="section2-img"
      />
      <img
        src="https://victorverheyden.com/wp-content/uploads/2024/03/MG_8886-4-scaled.jpg"
        className="section2-img"
      />
      <a
        className="next-btn"
        onClick={() => handleNavigation("/collab-igor-dieryck")}
      >
        Next - Collaboration w. Igor Dieryck
      </a>
    </div>
  );
};

export default Strellson;
