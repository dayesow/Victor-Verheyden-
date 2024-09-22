import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomMouse from "./components/custommouse/CustomMouse";
import { useState, useEffect } from "react";
import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import CollabIgorDieryck from "./components/Pages/IgorDieryck/CollabIgorDieryck";

function App() {
  const [loading, setLoading] = useState(true);

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
      <Header />
      {/* {loading ? <Preloader /> : <Home />} */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/collab-igor-dieryck" element={<CollabIgorDieryck />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
