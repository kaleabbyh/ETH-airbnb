import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import CityPage from "./pages/CityPage";
import Try from "./pages/Try";
import HotelPage from "./pages/HotelPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/city/:id" element={<CityPage />} />
        <Route path="/hotel/:id" element={<HotelPage />} />
        <Route path="/try" element={<Try />} />
      </Routes>
    </Router>
  );
}

export default App;
