import React from "react";
import "./menu.scss";

const Menu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="menu-content">
      <a className="plus-btn" onClick={toggleMenu}>
        <span>-</span>
      </a>
      <h2>Works</h2>
      <ul>
        <li>Collaboration w. Igor Dieryck</li>
        <li>Portrait of a writer, Rodrigo Costa Ribeiro</li>
        <li>Work in progress So Close Yet So Far From Paradise</li>
        <li>Portraits of an artist, Jaouad Alloul</li>
        <li>Playtime Photobook</li>
        <li>Les Hommes Andersom</li>
        <li>Matthias Geerts & Morgan Lugo for Strellson</li>
      </ul>
      <h2>Info</h2>
    </div>
  );
};

export default Menu;
