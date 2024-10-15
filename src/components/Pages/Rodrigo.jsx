import Marquee from "../marquee/Marquee";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import "./rodrigo.scss";
import { useHandleNavigation } from "../pageTransition/PageTransition";

const Rodrigo = () => {
  const handleNavigation = useHandleNavigation();
  const t = (
    <>
      <b> Portrait of a writer, Rodrigo Costa Ribeiro </b> - Date, febr. 2022 -
      Model, Rodrigo Costa Ribeiro - Location, Brussels -
      <b> Portrait of a writer, Rodrigo Costa Ribeiro </b> - Date, febr. 2022 -
      Model, Rodrigo Costa Ribeiro - Location, Brussels -
    </>
  );
  return (
    <div className="rodrigo-section">
      <Marquee text={t} duration={40} />
      <div className="rodrigo-columns">
        {/* Eerste kolom */}
        <div className="rodrigo-column-1">
          <img
            src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_1018-min-scaled.jpg"
            className="section-img-1"
            alt="Rodrigo 1"
          />
          <img
            src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_1063-min-2048x1365.jpg"
            className="section-img-2"
            alt="Rodrigo 2"
          />
          <img
            src="https://victorverheyden.com/wp-content/uploads/2023/11/drigo-and-sign-min-scaled.jpg"
            className="section-img-3"
            alt="Rodrigo 3"
          />
          <img
            src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_1214-min-scaled.jpg"
            className="section-img-4"
            alt="Rodrigo 4"
          />
        </div>

        {/* Tweede kolom */}
        <div className="rodrigo-column-2">
          <img
            src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_0981-min-scaled.jpg"
            className="section-img-5"
            alt="Rodrigo 5"
          />
          <img
            src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_1294-min-scaled.jpg"
            className="section-img-6"
            alt="Rodrigo 6"
          />
          <img
            src="https://victorverheyden.com/wp-content/uploads/2023/11/MG_1242-min-scaled.jpg"
            className="section-img-7"
            alt="Rodrigo 7"
          />
        </div>
      </div>
      <a className="next-btn" onClick={() => handleNavigation("/wip")}>
        Next - So Close Yet So Far From Paradise
      </a>
      <ScrollToTop />
    </div>
  );
};

export default Rodrigo;
