import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHandleNavigation } from "../pageTransition/PageTransition";
import "./menu.scss";
import { trackEvent } from "../../analytics";

// eslint-disable-next-line react/prop-types
const Menu = ({ isMenuOpen, toggleMenu }) => {
  const location = useLocation();
  const handleNavigation = useHandleNavigation();

  // Define your menu items and paths
  const menuItems = [
    {
      path: "/collaboration-with-igordieryck",
      label: "Collaboration w. Igor Dieryck",
    },
    {
      path: "/portrait-of-a-writer-rodrigo-costa-ribeiro",
      label: "Rodrigo Costa Ribeiro",
    },
    {
      path: "/wip",
      label: "Work in progress So Close Yet So Far From Paradise",
    },
    {
      path: "/portrait-of-an-artist-jaouad-alloul",
      label: "Jaouad Alloul",
    },
    { path: "/playtime-photobook", label: "Playtime Photobook" },
    { path: "/performance-les-hommes-andersom", label: "Les Hommes Andersom" },
    {
      path: "/matthias-geerts-morgan-lugo",
      label: "Matthias Geerts & Morgan Lugo for Strellson",
    },
    {
      path: "/iskander-moon",
      label: "Iskander Moon",
    },
  ];

  const handleMenuNavigation = (path, label) => {
    // Track the event
    trackEvent({
      category: "Menu Navigation",
      action: "Clicked Menu Item",
      label: label,
    });

    // Close the menu and navigate
    toggleMenu();
    setTimeout(() => {
      handleNavigation(path);
    }, 300);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        toggleMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen, toggleMenu]);

  return (
    <>
      <div
        className={`overlay ${isMenuOpen ? "visible" : "closing"}`}
        onClick={toggleMenu}
      ></div>

      <div className={`menu-container ${isMenuOpen ? "open" : "closed"}`}>
        <a
          className="close-btn"
          onClick={toggleMenu}
          style={{ marginTop: "-0.75rem" }}
        >
          <span>_</span>
        </a>
        <div className={`menu ${isMenuOpen ? "open" : "closed"}`}>
          <h2>
            <a
              className={`menu-btn ${
                location.pathname === "/home" || location.pathname === "/"
                  ? "active"
                  : ""
              }`}
              onClick={() => handleMenuNavigation("/home", "Home")}
            >
              Works
            </a>
          </h2>
          <ul>
            {menuItems.map((item) => (
              <li key={item.path}>
                <a
                  onClick={() => handleMenuNavigation(item.path, item.label)}
                  className={`menu-btn ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <h2>
            <a
              className={`menu-btn ${
                location.pathname === "/info" ? "active" : ""
              }`}
              onClick={() => handleMenuNavigation("/info", "Info")}
            >
              Info
            </a>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Menu;
