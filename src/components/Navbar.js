import React, { useState } from "react";
import { Link } from "react-router-dom";
import treatments from "../data/treatments";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTreatments = () => {
    const section = document.getElementById("treatments");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToTreatments();
    }
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="logo-container">
        <img
          src={logo}
          alt="Core Dentistry Logo"
          className="logo-image"
        />
        <span className="logo-text">
          Core Dentistry
        </span>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <div className="dropdown">
          <span 
            className="dropdown-trigger"
            onClick={scrollToTreatments}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex="0"
            aria-haspopup="true"
          >
            Treatments
          </span>
          <div className="dropdown-content" role="menu">
            {treatments.map((treatment) => (
              <div 
                key={treatment.id} 
                role="menuitem"
                tabIndex="0"
                onClick={() => {
                  scrollToTreatments();
                  setMenuOpen(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    scrollToTreatments();
                    setMenuOpen(false);
                  }
                }}
              >
                {treatment.name}
              </div>
            ))}
          </div>
        </div>
        <Link to="/book" onClick={() => setMenuOpen(false)}>
          Book Appointment
        </Link>
        <Link
          to="/dashboard"
          className="nav-dashboard-link"
          onClick={() => setMenuOpen(false)}
          title="View Appointments Dashboard"
        >
          📋 Dashboard
        </Link>
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        style={{ background: 'none', border: 'none' }}
      >
        ☰
      </button>
    </nav>
  );
}

export default Navbar;