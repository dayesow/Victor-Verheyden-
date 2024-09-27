import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomMouse from "./components/custommouse/CustomMouse";
import { useState, useEffect } from "react";
import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import CollabIgorDieryck from "./components/Pages/CollabIgorDieryck";
import PageTransition from "./components/pageTransition/PageTransition";
import JaouadAlloul from "./components/Pages/JaouadAlloul";
import LesHommesAndersom from "./components/Pages/LesHommesAndersom";
import Strellson from "./components/Pages/Strellson";
import Rodrigo from "./components/Pages/Rodrigo";
import Menu from "./components/menu/Menu";

function App() {
  const [loading, setLoading] = useState(true);

  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // useEffect(() => {
  //   // Simulate a loading delay, e.g., fetching data or waiting for resources to load
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 10000); // Adjust the time as needed

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <CustomMouse />
      <Header toggleMenu={toggleMenu} />

      {/* Render the Menu and control its visibility with isMenuOpen */}
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {/* {loading ? <Preloader /> : <Home />} */}
      <BrowserRouter>
        {/* <PageTransition /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
