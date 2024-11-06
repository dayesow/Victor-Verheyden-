import { useHandleNavigation } from "../pageTransition/PageTransition";
import "./header.scss";

// eslint-disable-next-line react/prop-types
const Header = ({ toggleMenu }) => {
  const handleNavigation = useHandleNavigation(); // Gebruik de navigatiecontext

  return (
    <header className="header">
      <div className="header-left">
        <a onClick={() => handleNavigation("/home")} className="logo">
          <span className="initials">V</span>
          <span className="full-name">ictor</span>
          <span className="initials"> V</span>
          <span className="full-name">erheyden</span>
        </a>
      </div>
      <div className="header-right">
        {/* The plus button triggers the toggleMenu function */}
        <a className="plus-btn" onClick={toggleMenu}>
          <span>+</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
