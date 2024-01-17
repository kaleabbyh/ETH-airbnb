import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import CityPage from "./pages/CityPage";
import Try from "./pages/Try";
import HotelPage from "./pages/HotelPage";
import ReservePage from "./pages/Reserve";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
    
      </Routes>
    </Router>
  );
}

export default App;
