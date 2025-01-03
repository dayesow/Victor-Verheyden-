import "./App.css";
import Home from "./components/home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import CustomMouse from "./components/custommouse/CustomMouse";
import { useEffect, useState } from "react";
import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import CollabIgorDieryck from "./components/Pages/CollabIgorDieryck";
import PageTransition from "./components/pageTransition/PageTransition";
import JaouadAlloul from "./components/Pages/JaouadAlloul";
import LesHommesAndersom from "./components/Pages/LesHommesAndersom";
import Strellson from "./components/Pages/Strellson";
import Rodrigo from "./components/Pages/Rodrigo";

import WipPage from "./components/Pages/WipPage";
import Menu from "./components/menu/Menu";
import Info from "./components/Pages/Info";
import Photobook from "./components/Pages/Photobook";
import Iskander from "./components/Pages/Iskander";
import { initGA, trackPageView } from "./analytics";
import Lenis from "@studio-freight/lenis";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/home" || location.pathname === "/";

  useEffect(() => {
    // Initialize Google Analytics only once
    initGA();
  }, []);

  useEffect(() => {
    // Track page views on route change
    trackPageView(location.pathname);
  }, [location]);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
    if (!hasVisitedBefore && isHome) {
      setShowPreloader(true);
      localStorage.setItem("hasVisitedBefore", "true");
    }
  }, [isHome]);
  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handlePreloaderFinish = () => setShowPreloader(false);

  useEffect(() => {
    const style = `
      font-family: "IBM Plex Mono", monospace;
      font-size: 12px;
      color: #000;
      background-color: #ffffff;
      padding: 10px;
      border: 0.2px solid #000;
    `;

    console.log("%cDesign by Victor Verheyden", style);
    console.log("%cDeveloped by Daye Sow", style);
  }, []);

  useEffect(() => {
    // Initialiseer Lenis
    const lenis = new Lenis({
      duration: 1.2, // Duur van de animatie (in seconden)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing-functie
      smooth: true,
    });

    // Update loop
    const handleRaf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(handleRaf);
    };
    requestAnimationFrame(handleRaf);

    // Cleanup om memory leaks te voorkomen
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomMouse />
      {/* <BrowserRouter> */}
      {showPreloader && isHome && (
        <Preloader onFinish={handlePreloaderFinish} />
      )}
      <PageTransition>
        <Header toggleMenu={toggleMenu} />
        <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Routes>
          <Route path="/home" element={<Home toggleMenu={toggleMenu} />} />
          <Route index element={<Home />} />
          <Route
            path="/collaboration-with-igordieryck"
            element={<CollabIgorDieryck />}
          />
          <Route
            path="/portrait-of-an-artist-jaouad-alloul"
            element={<JaouadAlloul />}
          />
          <Route
            path="/performance-les-hommes-andersom"
            element={<LesHommesAndersom />}
          />
          <Route path="/matthias-geerts-morgan-lugo" element={<Strellson />} />
          <Route
            path="/portrait-of-a-writer-rodrigo-costa-ribeiro"
            element={<Rodrigo />}
          />
          <Route path="/wip" element={<WipPage />} />
          <Route path="/playtime-photobook" element={<Photobook />} />
          <Route path="/info" element={<Info />} />
          <Route path="/iskander-moon" element={<Iskander />} />
        </Routes>
      </PageTransition>
    </>
  );
}

export default App;
