import React from "react";
import "./header.scss";

const Header = ({ toggleMenu }) => {
  return (
    <header className="header">
      <div className="header-left">
        <a href="/" className="logo">
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
