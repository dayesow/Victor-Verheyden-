import "./App.css";
import Home from "./components/home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import CustomMouse from "./components/custommouse/CustomMouse";
import { useState } from "react";
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

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/home" || location.pathname === "/";

  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handlePreloaderFinish = () => setShowPreloader(false);

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
          <Route path="/collab-igor-dieryck" element={<CollabIgorDieryck />} />
          <Route
            path="/portrait-of-an-artist-jaouad-alloul"
            element={<JaouadAlloul />}
          />
          <Route
            path="/performance-les-hommes-andersom"
            element={<LesHommesAndersom />}
          />
          <Route path="/matthias-geerts-morgan-lugo" element={<Strellson />} />
          <Route path="/rodrigo" element={<Rodrigo />} />
          <Route path="/wip" element={<WipPage />} />
          <Route path="/playtime-photobook" element={<Photobook />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </PageTransition>
    </>
  );
}

export default App;
