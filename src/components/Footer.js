import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import logo from "../assets/logo.png";
import "../styles/Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTreatments = () => {
    const section = document.getElementById("treatments");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not on home page, navigate home first
      window.location.href = "/#treatments";
    }
  };

  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="footer-container">
        {/* Column 1: Brand Info */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <img src={logo} alt="Core Dentistry Logo" className="footer-logo-img" />
            <span className="footer-logo-text">Core Dentistry</span>
          </div>
          <p className="brand-tagline">Artistry & Care in Dentistry</p>
          <p className="brand-desc">
            Providing a serene, state-of-the-art environment for your family's oral wellness. We specialize in comfortable, patient-centered solutions.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/" onClick={scrollToTop}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={scrollToTop}>About Us</Link>
            </li>
            <li>
              <Link to="/book" onClick={scrollToTop}>Book Appointment</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Treatments */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <ul className="footer-links">
            <li>
              <span className="footer-link-span" onClick={scrollToTreatments} role="button" tabIndex="0">
                Scaling & Cleaning
              </span>
            </li>
            <li>
              <span className="footer-link-span" onClick={scrollToTreatments} role="button" tabIndex="0">
                Root Canal Treatment
              </span>
            </li>
            <li>
              <span className="footer-link-span" onClick={scrollToTreatments} role="button" tabIndex="0">
                Braces & Clear Aligners
              </span>
            </li>
            <li>
              <span className="footer-link-span" onClick={scrollToTreatments} role="button" tabIndex="0">
                Pediatric Dentistry
              </span>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact details */}
        <div className="footer-col contact-col">
          <h3>Get In Touch</h3>
          <ul className="footer-contact-list">
            <li>
              <FaMapMarkerAlt className="footer-icon" aria-hidden="true" />
              <span>Patel Colony, Jamnagar</span>
            </li>
            <li>
              <FaPhoneAlt className="footer-icon" aria-hidden="true" />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
            <li>
              <FaEnvelope className="footer-icon" aria-hidden="true" />
              <a href="mailto:coredentistry@gmail.com">coredentistry@gmail.com</a>
            </li>
            <li>
              <FaClock className="footer-icon" aria-hidden="true" />
              <div className="timings-div">
                <p>Weekdays: 9AM – 1PM | 3PM – 8PM</p>
                <p>Sunday: 9AM – 1PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Policy */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Core Dentistry. All rights reserved.
          </p>
          <div className="footer-policy-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
