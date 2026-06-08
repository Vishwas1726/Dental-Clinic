import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import BookAppointment from "./pages/BookAppointment";
import Dashboard from "./pages/Dashboard";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App;