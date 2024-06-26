import { useState } from "react";
import "./App.css";

import Navbar from "./component/Navbar/Navbar.jsx";
import Footer from "./component/Footer/Footer.jsx";
import MainSection from "./component/MainSection/MainSection.jsx";
import About from "./component/About/About.jsx";
import { Route, Routes } from "react-router-dom";
function App() {
  const isLoad= "Loading...";
  return (
    
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainSection/>} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
