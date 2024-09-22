import React from "react";
import "./header.scss";

const Header = () => {
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
        <a className="plus-btn">
          <span>+</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
